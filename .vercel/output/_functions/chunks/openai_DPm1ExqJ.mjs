import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "your_openai_api_key"
});
async function analyzeRoom(imageBase64, roomType) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are an expert interior designer and room analyst. Analyze the provided room image and return a JSON object with the following structure:

{
  "designScore": <number 0-100>,
  "layoutScore": <number 0-10>,
  "lightingScore": <number 0-10>,
  "storageScore": <number 0-10>,
  "styleScore": <number 0-10>,
  "spaceUtilizationScore": <number 0-10>,
  "visualBalanceScore": <number 0-10>,
  "findings": [
    {
      "category": "<Layout|Lighting|Storage|Style|Space|Color>",
      "issue": "<description of the issue>",
      "severity": "<low|medium|high>"
    }
  ],
  "recommendations": [
    {
      "category": "<Layout|Lighting|Storage|Style|Space|Color>",
      "suggestion": "<specific recommendation>",
      "impact": "<low|medium|high>",
      "estimatedCost": "<$X-$Y range>"
    }
  ]
}

The room type is: ${roomType}

Score each dimension honestly but fairly. Provide 3-6 findings and 4-8 actionable recommendations with realistic cost estimates.
Return ONLY valid JSON, no markdown or additional text.`
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${imageBase64}`,
              detail: "high"
            }
          },
          {
            type: "text",
            text: `Analyze this ${roomType.replace("_", " ")}. Provide a comprehensive design analysis with scores, findings, and recommendations.`
          }
        ]
      }
    ],
    max_tokens: 2e3,
    response_format: { type: "json_object" }
  });
  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response from AI");
  }
  return JSON.parse(content);
}
async function generateDesignReport(imageBase64, roomType, designGoal, style, currentAnalysis) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are an expert interior designer. Based on the room analysis and user preferences, generate a comprehensive design report.

Current Analysis:
- Design Score: ${currentAnalysis.designScore}/100
- Layout: ${currentAnalysis.layoutScore}/10
- Lighting: ${currentAnalysis.lightingScore}/10
- Storage: ${currentAnalysis.storageScore}/10
- Style: ${currentAnalysis.styleScore}/10
- Space Utilization: ${currentAnalysis.spaceUtilizationScore}/10
- Visual Balance: ${currentAnalysis.visualBalanceScore}/10

Findings: ${JSON.stringify(currentAnalysis.findings)}

Design Goal: ${designGoal}
Preferred Style: ${style}

Return a JSON object with:
{
  "summary": "<2-3 paragraph professional design summary explaining the changes>",
  "improvements": [
    {
      "title": "<improvement title>",
      "description": "<what was improved>",
      "category": "<Layout|Lighting|Storage|Style|Space|Color>"
    }
  ],
  "budgetEstimates": [
    {
      "tier": "<Budget Refresh|Mid-Range Upgrade|Premium Makeover|Luxury Transformation>",
      "range": "<$X-$Y>",
      "description": "<what this budget covers>"
    }
  ],
  "shoppingSuggestions": [
    {
      "item": "<item name>",
      "priority": "<must-have|recommended|optional>",
      "estimatedPrice": "<$X>",
      "description": "<brief description>"
    }
  ],
  "newScore": <projected score 0-100>
}

Make the summary sound like a professional interior designer explaining their vision. The new score should be realistic (typically 85-95 if improvements are made).
Return ONLY valid JSON.`
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${imageBase64}`,
              detail: "high"
            }
          },
          {
            type: "text",
            text: `Generate a design report for this ${roomType.replace("_", " ")}. Goal: ${designGoal}. Style: ${style}.`
          }
        ]
      }
    ],
    max_tokens: 3e3,
    response_format: { type: "json_object" }
  });
  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response from AI");
  }
  return JSON.parse(content);
}

export { analyzeRoom as a, generateDesignReport as g };
