import type { APIRoute } from 'astro';
import { generateDesignReport } from '../../../lib/ai';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Check auth
    const accessToken = cookies.get('sb-access-token')?.value;
    const refreshToken = cookies.get('sb-refresh-token')?.value;

    if (!accessToken || !refreshToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data: sessionData } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    if (!sessionData.session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { analysis, designGoal, style, roomType } = await request.json();

    if (!analysis || !designGoal || !style) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // For now, we don't have the image in this request
    // The report is generated based on the analysis data
    // In a full implementation, we'd store the image and pass it
    const report = await generateDesignReport(
      '', // imageBase64 - would need to be stored/passed
      roomType,
      designGoal,
      style,
      analysis
    );

    return new Response(JSON.stringify({ report }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Report generation error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Report generation failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
