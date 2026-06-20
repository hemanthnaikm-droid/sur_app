// ══════════════════════════════════════════════════════════════
//  /api/ai-chat  —  Vercel Serverless Function
//
//  Securely proxies requests to the Anthropic Claude API.
//  Used by both the AI Safety Assistant and the Safe Route module.
//
//  WHY THIS FILE EXISTS:
//  Browsers cannot call https://api.anthropic.com directly with a
//  real API key — the key would be visible to anyone via DevTools
//  / "View Source", and Anthropic's API blocks plain browser CORS
//  requests unless you deliberately opt in with a special header
//  that re-exposes the same key-theft risk. Routing through this
//  serverless function keeps the key on the server, where it
//  belongs, and avoids CORS entirely (same-origin request).
//
//  ── REQUIRED ENVIRONMENT VARIABLE (set in Vercel dashboard) ──
//  Project Settings → Environment Variables → add for Production
//  AND Preview/Development if you test locally with `vercel dev`.
//
//  ANTHROPIC_API_KEY = sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
//  Get a key at https://console.anthropic.com/settings/keys
//
//  NEVER put this value in your frontend code or commit it to git.
//  This file only reads it from process.env at request time.
//
//  LOCAL TESTING: plain `npm run dev` (Vite) does NOT run this
//  function — Vite only serves the frontend. Use `vercel dev`
//  instead so /api routes are available locally, or deploy to
//  Vercel and test against the deployed URL.
// ══════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  // CORS — allow calls from your deployed frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { ANTHROPIC_API_KEY } = process.env;
  if (!ANTHROPIC_API_KEY) {
    return res.status(503).json({
      error: "AI is not configured on the server yet. Add ANTHROPIC_API_KEY in your Vercel project's Environment Variables, then redeploy.",
    });
  }

  const { system, messages, max_tokens } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Request must include a non-empty messages array." });
  }

  try {
    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: max_tokens || 1000,
        ...(system ? { system } : {}),
        messages,
      }),
    });

    const data = await anthropicRes.json();
    if (!anthropicRes.ok) {
      return res.status(anthropicRes.status).json({
        error: data?.error?.message || `Anthropic API error ${anthropicRes.status}`,
      });
    }

    const text = data.content?.find(b => b.type === "text")?.text || "";
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(502).json({ error: e.message || "Could not reach Claude API." });
  }
}
