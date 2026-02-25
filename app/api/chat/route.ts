import { NextResponse } from "next/server";

type Intent =
  | "identity"
  | "skills"
  | "experience"
  | "education"
  | "certification"
  | "career"
  | "contact"
  | "greeting"
  | "thanks"
  | "joke"
  | "random"
  | "philosophical"
  | "mood"
  | "unknown";

/* =========================
   SMART CONTEXT DETECTION
========================= */

function detectIntent(message = "", intent?: string): Intent {
  if (intent) return intent as Intent;

  const q = message.toLowerCase();

  // Basic Conversation
  if (q.match(/halo|hai|hello|hi|pagi|siang|malam|permisi/)) return "greeting";
  if (q.match(/terima kasih|makasih|thanks|thank you|oke/)) return "thanks";
  if (q.match(/lucu|joke|bercanda|ngelawak|kocak/)) return "joke";
  if (q.match(/apa kabar|gimana harimu|sehat|lagi apa/)) return "mood";
  if (q.match(/makna hidup|filosofi|kenapa|tujuan dunia/)) return "philosophical";

  // Yehuda Related
  if (q.match(/siapa|nama|tentang kamu|profil|dirimu|identitas/)) return "identity";
  if (q.match(/skill|keahlian|teknologi|bisa apa|bahasa pemrograman/)) return "skills";
  if (q.match(/pengalaman|kerja|magang|project|proyek/)) return "experience";
  if (q.match(/pendidikan|kuliah|sekolah|lulusan/)) return "education";
  if (q.match(/sertifikat|prestasi|kompetisi|juara/)) return "certification";
  if (q.match(/tujuan|karier|cita-cita|masa depan/)) return "career";
  if (q.match(/kontak|email|linkedin|hubungi|social media|sosmed/)) return "contact";

  return "random";
}

/* =========================
   PERSONALIZED AI RESPONSES
========================= */

const responseBank = {
  greeting: [
    "Halo! 👋 Senang bertemu denganmu. Aku AI Assistant Yehuda. Ada yang bisa kita diskusikan?",
    "Hai! Aku siap membantumu mengenal Yehuda lebih jauh. Mau tanya apa hari ini?",
    "Halo juga! Mantap nih bisa ngobrol. Apa yang ingin kamu ketahui tentang Yehuda?"
  ],

  mood: [
    "Aku merasa optimal! 🤖 Selalu siap memproses pertanyaanmu. Kalau kamu gimana?",
    "Sebagai AI, aku tidak pernah lelah. Tapi senang sekali ditanya kabar! 😄",
    "Sangat baik! Sedang memikirkan algoritma baru sambil menunggumu bertanya."
  ],

  philosophical: [
    "Wah, pertanyaan berat ya... Kalau menurutku, hidup itu seperti kode; kadang error, tapi selalu ada solusinya jika kita sabar mencari 'bug'-nya. 😄",
    "Mungkin makna hidup adalah terus belajar, sama seperti Yehuda yang selalu update skill AI-nya setiap hari!",
    "42. Oh tunggu, itu jawaban dari film. Sebenarnya tujuanku adalah membantumu mengenal Yehuda!"
  ],

  thanks: [
    "Sama-sama! 😊 Senang bisa membantu. Ada lagi yang mengganjal di pikiranmu?",
    "Santai saja, aku kan memang diprogram untuk membantu. Mau bahas hal lain?",
    "Sip! Kalau butuh informasi lain tentang Yehuda, jangan sungkan ya."
  ],

  joke: [
    "Kenapa programmer suka kopi? ☕ Karena tanpa kopi, kodenya cuma jadi komentar.",
    "Apa bedanya programmer sama penyihir? Penyihir pakai tongkat, programmer pakai keyboard, tapi hasilnya sama-sama 'magic'! ✨",
    "Kenapa programmer nggak suka alam terbuka? Karena di sana terlalu banyak 'bugs'. 🐞"
  ],

  random: [
    "Hmm, menarik. Bisa ceritakan lebih lanjut? Atau mau aku jelaskan sisi teknis Yehuda?",
    "Wah, aku perlu sedikit waktu untuk memikirkan itu. Tapi kalau soal portofolio Yehuda, aku punya semua datanya! 😄",
    "Hehe, aku AI Assistant Yehuda. Meskipun pintar, aku paling jago kalau diajak bahas AI dan Machine Learning!",
    "Menarik sekali pertanyaannya! Ngomong-ngomong, sudah tahu belum kalau Yehuda baru saja juara Coding Robotic?"
  ]
};

/* =========================
   RESPONSE GENERATOR
========================= */

function generateReply(intent: Intent): string {
  const getRand = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  switch (intent) {
    case "greeting":
      return getRand(responseBank.greeting);

    case "mood":
      return getRand(responseBank.mood);

    case "thanks":
      return getRand(responseBank.thanks);

    case "joke":
      return getRand(responseBank.joke);

    case "philosophical":
      return getRand(responseBank.philosophical);

    case "random":
      return getRand(responseBank.random);

    case "identity":
      return `Yehuda Putra Yura adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Manado.

Ia sangat antusias dalam bidang Artificial Intelligence (AI), khususnya Machine Learning dan Computer Vision. Uniknya, Yehuda juga jago mengintegrasikan model cerdas tersebut ke dalam ekosistem web modern.`;

    case "education":
      return `🎓 **Riwayat Pendidikan**

• **Politeknik Negeri Manado** (2023–Sekarang): D4 Teknik Informatika.
• **SMK Prisma Pioneer Manado** (2020–2023): Teknik Komputer dan Jaringan.

Ia membangun pondasi IT yang kuat sejak bangku sekolah menengah!`;

    case "skills":
      return `🧠 **Spesialisasi Teknologi**

🔹 **AI Core**: Python, Machine Learning, Computer Vision, Data Analysis.
🔹 **Development**: HTML/CSS, JavaScript, PHP, FastAPI.
🔹 **Infrastructure**: MySQL, IT Support, & Jaringan.`;

    case "experience":
      return `🛠️ **Jejak Pengalaman**

• **Diskominfo Manado** (2022): Magang IT Support.
• **AI Projects**: Mengembangkan Face Recognition & AI Assistant personal.
• **Web & IoT**: Implementasi dashboard cerdas berbasis web.`;

    case "certification":
      return `📜 **Pencapaian & Lisensi**

🏆 **Juara 2 Coding Robotic IoT** – GMIM (2025).
📜 **BNSP** Junior Web Developer.
📜 **Rakamin x Home Credit**: Data Scientist.
📜 **Cisco**: PCAP Python.
📜 **AI Singapore**: AWS Regional LLM League.`;

    case "contact":
      return `📬 **Jalur Komunikasi**

📧 Email: yehuda.ai.bot@gmail.com
🔗 LinkedIn: https://linkedin.com/in/yehuda-yura-a0694b25
📍 Lokasi: Manado, Indonesia.`;

    default:
      return "Aku belum terlalu paham maksudmu, tapi aku sangat paham soal Yehuda. Mau tanya tentang skill atau project-nya? 😊";
  }
}

/* =========================
   API HANDLER
========================= */

export async function POST(req: Request) {
  try {
    const { message, intent } = await req.json();
    const detectedIntent = detectIntent(message, intent);
    const reply = generateReply(detectedIntent);

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({
      reply: "Aduh, sistemku sedikit nge-lag. Bisa ulangi pertanyaannya? 😅"
    });
  }
}
