"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Sparkles, Terminal, ChevronRight } from "lucide-react";

const quickQuestions = [
  { label: "👤 Tentang", intent: "identity", text: "Tentang Yehuda" },
  { label: "🧠 Skill", intent: "skills", text: "Skill & teknologi" },
  { label: "🛠️ Pengalaman", intent: "experience", text: "Pengalaman" },
  { label: "📜 Sertifikasi", intent: "certification", text: "Sertifikasi" },
  { label: "📬 Kontak", intent: "contact", text: "Kontak" },
  { label: "🎓 Pendidikan", intent: "education", text: "Pendidikan" },
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo 👋 Saya AI Assistant Yehuda Yura. Ada yang bisa saya bantu terkait profil atau pengalaman Yehuda?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  async function sendMessage(payload: { message: string; intent?: string }) {
    if (typing || !payload.message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: payload.message }]);
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      typeWriter(data.reply || "Maaf, server sedang sibuk.");
    } catch (err) {
      setTyping(false);
      typeWriter("Koneksi bermasalah. Pastikan Anda terhubung ke internet.");
    }
  }

  function typeWriter(text: string) {
    let index = 0;
    let current = "";
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const interval = setInterval(() => {
      current += text[index];
      index++;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: current };
        return updated;
      });

      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 12);
  }

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-2 sm:py-6 flex flex-col h-[calc(100dvh-80px)] sm:h-[85vh] relative">
      
      {/* --- BG GLOW --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="flex flex-col h-full rounded-[2rem] sm:rounded-[3rem] bg-zinc-900/40 border border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden border-b-0 sm:border-b">
        
        {/* ===== HEADER ===== */}
        <header className="px-5 py-4 sm:px-8 sm:py-6 border-b border-white/5 bg-zinc-950/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group">
              <Bot className="text-white group-hover:rotate-12 transition-transform" size={24} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-white tracking-tight flex items-center gap-2">
                YEHUDA AI <span className="hidden sm:inline text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">CORE V2</span>
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs text-zinc-500 font-medium">Neural System Active</span>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
            <Sparkles size={18} className="text-zinc-600 hover:text-cyan-400" />
          </button>
        </header>

        {/* ===== CHAT BODY ===== */}
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-zinc-800">
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 sm:gap-4 ${m.role === "user" ? "flex-row-reverse" : "animate-[fadeIn_0.3s_ease-out]"}`}>
              <div className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl flex items-center justify-center shrink-0 border 
                ${m.role === "assistant" ? "bg-zinc-800 border-white/10 shadow-sm" : "bg-blue-600 border-blue-400 shadow-blue-500/20 shadow-md"}`}>
                {m.role === "assistant" ? <Bot size={16} className="text-cyan-400" /> : <User size={16} className="text-white" />}
              </div>

              <div className={`relative px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-[13px] sm:text-sm leading-relaxed max-w-[85%] sm:max-w-[75%] transition-all
                ${m.role === "assistant" 
                  ? "bg-zinc-800/50 text-zinc-200 rounded-tl-none border border-white/5" 
                  : "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/10"}`}>
                {m.content}
              </div>
            </div>
          ))}

          {typing && messages[messages.length-1].content === "" && (
            <div className="flex items-center gap-3 ml-12 sm:ml-13 animate-pulse">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Analysing Request</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </main>

        {/* ===== QUICK ACTIONS (Mobile Swipeable) ===== */}
        <div className="px-4 py-3 sm:px-8 sm:py-4 bg-zinc-950/20 border-t border-white/5">
          <div className="flex overflow-x-auto gap-2 pb-2 sm:pb-0 no-scrollbar items-center">
            <div className="flex-none p-1.5 rounded-lg bg-zinc-800/50 text-zinc-500 hidden sm:block">
              <ChevronRight size={14} />
            </div>
            {quickQuestions.map((q) => (
              <button
                key={q.intent}
                disabled={typing}
                onClick={() => sendMessage({ message: q.text, intent: q.intent })}
                className="whitespace-nowrap px-4 py-2 rounded-xl text-[11px] font-medium border border-white/5 bg-zinc-800/40 text-zinc-400 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/10 transition-all active:scale-95 disabled:opacity-40"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* ===== INPUT AREA ===== */}
        <div className="px-4 pb-4 sm:px-8 sm:pb-8 pt-2 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim() || typing) return;
              sendMessage({ message: input });
              setInput("");
            }}
            className="relative flex items-center group"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan..."
              disabled={typing}
              className="w-full pl-5 pr-14 py-4 sm:py-5 rounded-2xl bg-zinc-800/30 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="absolute right-2.5 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all disabled:opacity-30 disabled:grayscale active:scale-90"
            >
              <Send size={18} className={typing ? "animate-pulse" : ""} />
            </button>
          </form>
          <div className="flex justify-between items-center px-2 mt-4">
             <p className="text-[9px] text-zinc-700 font-mono tracking-tighter">AI AGENT: YHDA_01</p>
             <div className="flex items-center gap-1">
                <Terminal size={10} className="text-zinc-700" />
                <p className="text-[9px] text-zinc-700 font-mono tracking-tighter uppercase">Ready for instruction</p>
             </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}