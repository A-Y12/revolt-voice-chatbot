import React, { useState, useRef } from 'react';
import './index.css';
function App() {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleMicClick = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'input.wav');

        const response = await fetch('http://localhost:3000/talk', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        setTranscript(data.text);

        if (data.audio) {
          const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
          setIsPlaying(true);
          audio.play();
          audio.onended = () => setIsPlaying(false);
        }
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Rev - Voice Chatbot</h1>
      <button
        onClick={handleMicClick}
        className={`px-6 py-3 text-white rounded-full text-lg font-medium transition-colors duration-300 ${isRecording ? 'bg-red-600' : 'bg-green-600'}`}
      >
        {isRecording ? 'Stop' : 'Speak'}
      </button>
      <div className="mt-6 p-4 bg-white shadow rounded-md w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-2">AI Response:</h2>
        <p className="text-gray-700">{transcript}</p>
        {isPlaying && <p className="text-blue-500 mt-2">🔊 Playing response...</p>}
      </div>
    </div>
  );
}

export default App;