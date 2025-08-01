# 🔊 Rev - Voice Chatbot (Revolt Motors Assistant)

A real-time voice chatbot using **React**, **Node.js**, and **Google Gemini 1.5 Flash**, tailored to answer questions only about **Revolt Motors** (electric bikes, service, pricing, availability, etc.). Records audio from your mic, sends it to Gemini, and plays back the AI's voice response.

---

## 🚀 Features

- 🎙 Record your voice
- 🔁 Send voice input to Gemini 1.5 Flash model
- 🧠 AI trained to respond **only** to Revolt Motors-related queries
- 🔊 Plays AI's spoken response back to user
- 📜 Displays text transcript as well

---

## 📦 Tech Stack

| Layer      | Tech                                |
|------------|-------------------------------------|
| Frontend   | React, Tailwind CSS                 |
| Backend    | Node.js, Express, Multer            |
| AI Model   | Google Generative AI (Gemini Flash) |
| Audio      | MediaRecorder API, HTML5 Audio      |

---

## 📁 Folder Structure

revolt-voice-chatbot/
├── client/ # Frontend React app
│ ├── App.jsx
│ ├── index.css
│ └── ...
├── server/ # Backend Express server
│ ├── index.js
│ └── uploads/ # Temporary audio files
├── .env # Environment variables
├── package.json
└── README.md


---

## 🧰 Prerequisites

- Node.js & npm
- Google Gemini API Key (from https://aistudio.google.com/)
- Modern browser (Chrome recommended)
- Mic access enabled

---

## 🔐 Environment Setup

Create a `.env` file inside the `server/` folder:

```env
GEMINI_API_KEY=your_gemini_api_key_here

🛠 Installation
1️⃣ Backend Setup
bash
Copy
Edit
cd server
npm install
2️⃣ Frontend Setup
bash
Copy
Edit
cd ../client
npm install
▶️ Running the App Locally
1. Start Backend (port 3000)
bash
Copy
Edit
cd server
npx nodemon index.js
2. Start Frontend (port 3001)
bash
Copy
Edit
cd client
npm run dev
Now open your browser and visit:
👉 http://localhost:3001

⚙️ How It Works
You click "Speak", the browser records your voice.

Audio is sent to backend → forwarded to Gemini model.

Gemini responds with both text and audio.

You see the transcript and hear the AI response.

❗ Model Note
Be sure to use this model only:

js
Copy
Edit
model: 'gemini-1.5-flash'
Do not use:

gemini-live-* → Not supported yet

gemini-pro, gemini-1.0 → No native audio support

🧯 Troubleshooting
Issue	Solution
❌ Mic not working	Allow mic access in browser settings
❌ CORS error	Ensure both frontend (3001) and backend (3000) are running
❌ 404 Model not found	Use only gemini-1.5-flash
❌ Audio not playing	Check response includes audioOut.audio

🧑‍💻 Author
Made with ❤️ by [Your Name]

🏍 Disclaimer
This chatbot is strictly limited to Revolt Motors-related topics. It will ignore queries unrelated to electric bikes, pricing, features, or dealerships.

yaml
Copy
Edit

---

Let me know if you also want:

- A `package.json` template  
- A deploy-ready `vercel.json` or `render.yaml`  
- `postman` collection to test your backend  
- GIF or screenshot section for GitHub preview
