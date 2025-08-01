// import './index.css';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

let chatSession;

async function initChat() {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: {
      parts: [
        {
          text: `You are Rev, a voice assistant designed to answer questions only about Revolt Motors, their electric bikes, features, services, availability, pricing, and dealership locations. Do not answer questions unrelated to Revolt Motors.`,
        },
      ],
    },
  });

  chatSession = await model.startChat();
}

// app.post('/talk', upload.single('audio'), async (req, res) => {
//   try {
//     if (!chatSession) await initChat();
//     const audioFile = req.file;
//     const audioData = fs.readFileSync(audioFile.path);

//     const result = await chatSession.sendMessage([{ inlineData: { mimeType: 'audio/wav', data: audioData.toString('base64') } }]);
//     const response = result.response;
//     const audio = response.audioOut?.audio || null;
//     const text = response.text();

//     fs.unlinkSync(audioFile.path); // Clean up

//     res.json({ text, audio });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to process request' });
//   }
// });

app.post('/talk', upload.single('audio'), async (req, res) => {
  try {
    if (!chatSession) await initChat();
    const audioFile = req.file;
    const audioData = fs.readFileSync(audioFile.path);

    const result = await chatSession.sendMessage([
      {
        inlineData: {
          mimeType: 'audio/wav',
          data: audioData.toString('base64'),
        },
      },
    ]);

    const response = result.response;

    const audio = response.audioOut?.audio
      ? Buffer.from(response.audioOut.audio).toString('base64')
      : null;

    const text = response.text();

    fs.unlinkSync(audioFile.path); 

    res.json({ text, audio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process request' });
  }
});


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
