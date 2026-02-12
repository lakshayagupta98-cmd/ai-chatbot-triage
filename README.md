# ai-chatbot-triage
🚀 AI Product Triage Chatbot
## 🔴 Live Demo

Try the deployed application here:

👉 https://ai-chatbot-api-fk39.onrender.com

Example test inputs:
- "The app crashes when I click submit"
- "Add dark mode to dashboard"
- "How do I reset my password?"




Overview

This project is an AI-powered product triage system designed to simulate how product teams can automate issue classification and support workflows using modern AI tools.

The application accepts user-submitted product feedback or issue descriptions and:

Provides a concise response

Classifies the input into:

Bug

Feature Request

How-To

Other

Assigns a confidence score (0–1)

Displays color-coded output for quick visual triage

The system is deployed as a full-stack cloud application.

🎯 Problem Statement

Product teams often receive large volumes of unstructured feedback. Manually reviewing, categorizing, and prioritizing issues slows down iteration cycles.

This project explores how AI can:

Structure unstructured user input

Automate first-level triage

Provide confidence signals for prioritization

Enable scalable support workflows

🏗 Architecture

Frontend:

HTML + JavaScript

Simple UI with color-coded classification

Backend:

Node.js + Express

OpenAI Chat Completion API

Prompt-engineered structured responses

Deployment:

Hosted on Render (cloud deployment)

Environment variable-based API key management

🧠 AI Workflow Design

The prompt is engineered to enforce structured output:

Answer: <short explanation>
Triage_Label: bug | feature | how-to | other
Confidence: <0-1>


This ensures consistent, machine-readable output suitable for future automation or dashboard integration.

🔍 Example Output

Input:

“The app crashes when I click submit.”

Output:

Answer: The application crash may indicate an unhandled exception...
Triage_Label: bug
Confidence: 0.91

🛠 Tech Stack

Node.js

Express

OpenAI API (gpt-4o-mini)

Cloud deployment (Render)

Basic frontend (HTML/CSS/JS)

🚀 Future Improvements

Persistent storage of triage logs

Dashboard for trend analysis

Batch processing mode

Integration with ticketing systems (e.g., Jira)

Prompt evaluation & A/B testing

💡 Why This Project

Built to demonstrate hands-on use of AI tools in a product context, focusing on:

Prompt engineering

Structured AI outputs

Automation of product workflows

Cloud deployment and system design
