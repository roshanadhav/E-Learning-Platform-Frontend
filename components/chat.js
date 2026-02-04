"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[92%] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-100 z-50 animate-fadeIn">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-orange-400 text-white rounded-t-2xl">
            <div className="flex items-center gap-2 font-semibold">
              <MessageSquare size={18} />
              Explain Easy
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 p-4 overflow-y-auto text-sm text-gray-700 space-y-4">
            <div className="bg-orange-50 text-gray-800 p-3 rounded-2xl w-fit max-w-[80%]">
              Hi 👋 How can I help you today?
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 px-4 py-2 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-orange-300"
            />

            <button className="p-2 rounded-xl bg-orange-400 hover:bg-orange-500 text-white transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-orange-400 hover:bg-orange-500 text-white shadow-xl flex items-center justify-center z-50 transition hover:scale-105"
        aria-label="Chatbot"
      >
        <MessageSquare size={24} />
      </button>
    </>
  );
}
