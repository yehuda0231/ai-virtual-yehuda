"use client";

import { useEffect, useRef, useState } from "react";

const quickQuestions = [
  { label: "👤 Tentang Saya", intent: "identity", text: "Tentang saya" },
  { label: "🧠 Skill & Teknologi", intent: "skills", text: "Skill & teknologi" },
  { label: "🛠️ Pengalaman", intent: "experience", text: "Pengalaman" },
  { label: "🎓 Pendidikan", intent: "education", text: "Pendidikan" },
  { label: "📜 Sertifikasi", intent: "certification", text: "Sertifikasi" },
  { label: "🎯 Tujuan Karier", intent: "career", text: "Tujuan karier" },
  { label: "📬 Kontak", intent: "contact", text: "Kontak" },
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // AUTO SCROLL CHAT
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  async function sendMessage(payload: { message: string; intent?: string }) {
    if (typing) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: payload.message },
    ]);

    setTyping(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    typeWriter(data.reply);
  }

  // ✨ Typing Effect
  function typeWriter(text: string) {
    let index = 0;
    let current = "";

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const interval = setInterval(() => {
      current += text[index];
      index++;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: current,
        };
        return updated;
      });

      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 18);
  }

  return (
    <section className="h-[100svh] w-full flex items-center justify-center bg-black px-3">
      <div className="w-full max-w-3xl h-full flex flex-col rounded-2xl bg-black/70 border border-white/20 shadow-2xl backdrop-blur">

       {/* ===== HEADER (STICKY) ===== */}
<header className="sticky top-0 z-30 px-5 py-4 bg-black/90 backdrop-blur border-b border-white/10">
  <h2 className="text-sm sm:text-base font-semibold text-white text-center">
    🤖 AI Assistant –{" "}
    <span className="text-blue-400">Yehuda Putra Yura</span>
  </h2>
</header>

{/* ===== CHAT BODY (SCROLL) ===== */}
<main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
  {messages.map((m, i) => (
    <div
      key={i}
      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[88%] ${
        m.role === "assistant"
          ? "bg-white/10 text-gray-100 border border-white/10"
          : "bg-blue-600 text-white ml-auto"
      }`}
    >
      {m.content}
    </div>
  ))}

  <div ref={chatEndRef} />
</main>


        {/* QUICK ACTIONS */}
        <div className="px-6 py-3 border-t border-white/10 flex flex-wrap gap-2">
          {quickQuestions.map((q) => (
            <button
              key={q.intent}
              disabled={typing}
              onClick={() =>
                sendMessage({
                  message: q.text,
                  intent: q.intent,
                })
              }
              className="px-3 py-1.5 rounded-full text-xs border border-white/20 text-white hover:bg-white hover:text-black transition disabled:opacity-40"
            >
              {q.label}
            </button>
          ))}
        </div>

        {/* INPUT */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.trim()) return;
            sendMessage({ message: input });
            setInput("");
          }}
          className="px-6 py-4 border-t border-white/10 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan tentang Yehuda..."
            disabled={typing}
            className="flex-1 px-4 py-2 rounded-lg bg-black border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={typing}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition disabled:opacity-50"
          >
            Kirim
          </button>
        </form>

      </div>
    </section>
  );
}
