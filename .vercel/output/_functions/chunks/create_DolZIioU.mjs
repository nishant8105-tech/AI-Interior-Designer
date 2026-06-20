import { s as supabase } from './supabase_B9N_dtI2.mjs';
import { s as supabaseAdmin } from './supabase-server_Dq3IjrrY.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const accessToken = cookies.get("sb-access-token")?.value;
    const refreshToken = cookies.get("sb-refresh-token")?.value;
    if (!accessToken || !refreshToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { data: sessionData } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    if (!sessionData.session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const userId = sessionData.session.user.id;
    const { title, roomType, analysis, designGoal, style } = await request.json();
    const { data: project, error: projectError } = await supabaseAdmin.from("projects").insert({
      user_id: userId,
      title: title || "Untitled Room",
      room_type: roomType
    }).select().single();
    if (projectError) {
      return new Response(JSON.stringify({ error: projectError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { error: analysisError } = await supabaseAdmin.from("room_analyses").insert({
      project_id: project.id,
      design_score: analysis.designScore,
      layout_score: analysis.layoutScore,
      lighting_score: analysis.lightingScore,
      storage_score: analysis.storageScore,
      style_score: analysis.styleScore,
      space_utilization_score: analysis.spaceUtilizationScore,
      visual_balance_score: analysis.visualBalanceScore,
      findings: analysis.findings,
      recommendations: analysis.recommendations
    });
    if (analysisError) {
      console.error("Analysis save error:", analysisError);
    }
    return new Response(JSON.stringify({ project }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Project creation error:", err);
    return new Response(JSON.stringify({ error: err.message || "Failed to create project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
