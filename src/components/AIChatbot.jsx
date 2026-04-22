import { useState } from "react";
import axios from "../api/axios";

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await axios.post(
      "/ai/memory-chat",
      {
        message: input,
      }
    );

    setReply(res.data.reply);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-44 right-6 h-16 w-16 rounded-full bg-black text-white z-50"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-64 right-6 w-80 bg-white p-5 rounded-3xl shadow-2xl z-50">

          <h2 className="text-xl font-bold mb-4">
            AI Assistant
          </h2>

          <div className="bg-gray-100 p-3 rounded-xl min-h-[80px] mb-4">
            {reply || "Ask me anything..."}
          </div>

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Type here..."
            className="w-full border px-4 py-3 rounded-full mb-3"
          />

          <button
            onClick={sendMessage}
            className="w-full bg-black text-white py-3 rounded-full"
          >
            Send
          </button>

        </div>
      )}
    </>
  );
}

export default AIChatbot;