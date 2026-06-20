import type { APIRoute } from 'astro';
import { analyzeRoom } from '../../lib/ai';
import { supabase } from '../../lib/supabase';

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

    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const roomType = formData.get('roomType') as string;

    if (!imageFile || !roomType) {
      return new Response(JSON.stringify({ error: 'Image and room type are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert image to base64
    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');

    // Analyze with AI
    const analysis = await analyzeRoom(imageBase64, roomType);

    return new Response(JSON.stringify({ analysis }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Analysis error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Analysis failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
