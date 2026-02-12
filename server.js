const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.json());

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// AI Chat Endpoint
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    const prompt = `
You are an AI-powered product triage assistant.

Your job is to:
1. Provide a short helpful answer.
2. Classify the issue into one of:
   - bug
   - feature
   - how-to
   - other
3. Provide a confidence score between 0 and 1.

Respond strictly in this format:

Answer: <short explanation>

Triage_Label: bug | feature | how-to | other

Confidence: <decimal between 0 and 1>

User message:
${userMessage}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.OPENAI_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "AI response error", details: data });
    }

    res.json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
