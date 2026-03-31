"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
      content: "Halo 👋 Saya AI Assistant Yehuda Yura. Ingin tahu lebih dalam tentang profil atau keahlian Yehuda? Silakan pilih opsi menarik di bawah ini untuk memulai! 🚀",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // OPTIMASI 1: Scroll yang lebih cerdas (Mencegah Lag di iOS)
  const scrollToBottom = useCallback((behavior: "smooth" | "auto" = "smooth") => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior, block: "end" });
    }
  }, []);

  // Hanya auto-scroll saat pesan user masuk (bukan setiap karakter typewriter)
  useEffect(() => {
    if (!typing) {
      scrollToBottom("smooth");
    }
  }, [messages.length, typing, scrollToBottom]);

  
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

  // OPTIMASI 2: Typewriter yang lebih efisien untuk mobile
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

      // OPTIMASI 3: Scroll auto tanpa behavior smooth saat ngetik (mencegah stuttering)
      if (index % 3 === 0) scrollToBottom("auto"); 

      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
      
       // speak(text); // 🔥 INI YANG BIKIN DIA NGOMONG
      
        setTimeout(() => scrollToBottom("smooth"), 100);
      }
      
    }, 20); // Sedikit diperlambat ke 20ms (60fps friendly) agar CPU iPhone tidak overheat
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col h-[calc(100dvh-100px)] sm:h-[85vh] transition-all duration-300 relative">
      
      {/* --- BG GLOW (Ringkas) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="flex flex-col h-full rounded-[2.5rem] bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur-2xl overflow-hidden">
        
        {/* ===== HEADER (Lebih Kecil & Bersih) ===== */}
        <header className="px-6 py-4 border-b border-white/5 bg-zinc-950/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-sm font-black text-white tracking-tight uppercase">Yehuda AI</h2>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-zinc-500 font-mono">SYSTEM_ACTIVE</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">


  <Sparkles size={16} className="text-zinc-600" />
</div>

        </header>

        {/* ===== CHAT BODY ===== */}
        <main 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-4 py-6 space-y-6 custom-scrollbar overscroll-contain"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border transition-all
                ${m.role === "assistant" ? "bg-zinc-800 border-white/10" : "bg-blue-600 border-blue-400"}`}>
                {m.role === "assistant" ? <Bot size={14} className="text-cyan-400" /> : <User size={14} className="text-white" />}
              </div>

              <div className={`relative px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed max-w-[85%] 
  ${m.role === "assistant" 
    ? "bg-zinc-800/50 text-zinc-200 rounded-tl-none border border-white/5 shadow-sm" 
    : "bg-blue-600 text-white rounded-tr-none shadow-md"}`}>

  <div className="whitespace-pre-wrap">

  {m.content.split(/(\*\*.*?\*\*)/g).map((part, index) => 
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-black text-white shadow-sm">
        {part.replace(/\*\*/g, "")}
      </strong>
    ) : (
      part
    )
  )}
</div>
              </div>
            </div>
          ))}

          {typing && messages[messages.length-1].content === "" && (
            <div className="flex items-center gap-2 ml-11">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} className="h-4" />
        </main>

        {/* ===== QUICK ACTIONS (Mobile Optimized) ===== */}
        <div className="px-4 py-3 bg-zinc-950/30 border-t border-white/5">
          <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth">
            {quickQuestions.map((q) => (
              <button
                key={q.intent}
                disabled={typing}
                onClick={() => sendMessage({ message: q.text, intent: q.intent })}
                className="whitespace-nowrap px-4 py-2 rounded-xl text-[11px] font-semibold border border-white/10 bg-zinc-800/40 text-zinc-400 active:bg-cyan-500/20 active:text-cyan-400 transition-all disabled:opacity-30"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* ===== INPUT AREA ===== */}
        <div className="p-4 bg-zinc-950/40 border-t border-white/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim() || typing) return;
              sendMessage({ message: input });
              setInput("");
            }}
            className="relative flex items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              disabled={typing}
              className="w-full pl-5 pr-14 py-4 rounded-2xl bg-zinc-800/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-all text-sm backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="absolute right-2 h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center active:scale-90 transition-transform disabled:opacity-20"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="mt-3 flex justify-center items-center gap-2 opacity-20">
             <Terminal size={10} className="text-white" />
             <p className="text-[8px] text-white font-mono tracking-widest uppercase">Encryption Active</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
  /* Membuat scrollbar tetap ada tapi tipis dan modern di desktop */
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(6, 182, 212, 0.5); /* Warna cyan saat hover */
  }

  /* Tetap sembunyikan scrollbar default jika kamu mau, tapi pastikan fungsi scroll aktif */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  @media screen and (max-width: 768px) {
    input { font-size: 16px !important; }
  }
`}</style>
    </section>
    
  );
}