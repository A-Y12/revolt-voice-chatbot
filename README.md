# 🗣️ Rev - Voice Chatbot for Revolt Motors

Rev is a real-time voice chatbot built using **React** and **Google Gemini 2.5 Flash Native Audio Dialog model**. It answers **only Revolt Motors-related questions** (electric bikes, features, pricing, dealership, etc.) and responds in **both voice and text**.

---

## 🚀 Features

- 🎤 Record user voice in-browser
- 📡 Send audio to backend (Node.js/Express)
- 🧠 Use Gemini Native Audio Dialog model to understand and respond
- 🔊 Play AI voice response and show transcript
- 🎨 Clean UI using TailwindCSS

---

## 📁 Project Structure

```
revolt-voice-chatbot/
├── client/           # React frontend
│   ├── App.jsx
│   ├── index.css
│   ├── ...
├── server/           # Node.js + Gemini backend
│   ├── index.js
│   ├── .env
│   └── ...
├── uploads/          # Temp folder for audio files
├── README.md
```

---

## 🧩 Tech Stack

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express, Multer
- **AI Model:** `gemini-2.5-flash-preview-native-audio-dialog` (via `@google/generative-ai`)
- **API Type:** server-to-server (native audio)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/revolt-voice-chatbot.git
cd revolt-voice-chatbot
```

---

### 2. Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

---

### 3. Add `.env` File in `/server`

```env
GEMINI_API_KEY=your_google_generative_ai_api_key
```

> Get your API key from: https://makersuite.google.com/app/apikey

---

### 4. Run the Servers

#### Backend (Port 3000)

```bash
cd server
node index.js
```

#### Frontend (Port 3001)

```bash
cd client
npm start
```

Then open: [http://localhost:3001](http://localhost:3001)

---

## 📦 Building Tailwind (optional)

If Tailwind doesn’t show styles:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Make sure `tailwind.config.js` content is:

```js
content: ["./src/**/*.{js,jsx,ts,tsx}"],
```

And `index.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🛠️ Backend Notes

- Uses `multer` to receive `.wav` audio file
- Converts audio to base64 and sends to Gemini via `@google/generative-ai`
- Cleans up uploaded files after response
- Sends both `text` and `audioOut.audio` to frontend

---

## 🧪 Example Prompt

**User:** "Tell me about Revolt RV400's range."  
**AI:** Responds with audio: _"The Revolt RV400 offers a range of up to 150 km on a full charge..."_

---

## ⚠️ Limitations

- Only supports `.wav` audio inputs
- Designed strictly for Revolt Motors-related queries
- Gemini API limits apply (check quota)

---

## 🙌 Acknowledgements

- [Google Generative AI](https://ai.google.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Revolt Motors](https://www.revoltmotors.com/)

---

## 📜 License

MIT License. Free to use and modify.
