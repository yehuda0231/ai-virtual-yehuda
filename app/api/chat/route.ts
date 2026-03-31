import { NextResponse } from "next/server";

type Intent =
  | "identity"
  | "skills"
  | "experience"
  | "education"
  | "certification"
  | "aidanml"
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
  if (q.match(/siapa|nama|tentang kamu|jelaskan semua|jelaskan yehuda|profil|portofolio yehuda|dirimu|identitas|berikan data yehuda|berikan datanya|datanya/)) return "identity";
  if (q.match(/skill|keahlian|teknologi|bisa apa|bahasa pemrograman|jelaskan teknis yehuda/)) return "skills";
  if (q.match(/pengalaman|kerja|magang|project|proyek/)) return "experience";
  if (q.match(/apa itu ai|ai apa|jelaskan ai|kecerdasan buatan apa|ai|gak tau ai/)) return "aidanml";
  if (q.match(/pendidikan|kuliah|sekolah|lulusan/)) return "education";
  if (q.match(/sertifikat|prestasi|kompetisi|juara|pernah juara|gak tau pernah juara/)) return "certification";
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
    "Sangat baik! Sedang memikirkan algoritma baru sambil menunggumu bertanya.",
    "Status: OPTIMAL. Semua sistem berjalan pada 0.002ms latency. 🤖",
    "Kapasitas memori aman. Siap menganalisis pertanyaanmu tentang Yehuda!",
    "Sedang melakukan enkripsi data... Canda! Aku 100% siap membantumu. 😄"
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
   HUMAN-LIKE ENHANCEMENT
========================= */

// Random delay simulation text
function addTypingEffect(text: string): string {
  const prefixes = [
    "Hmm... ",
    "Menarik... ",
    "Oke, aku pikir dulu sebentar ya... ",
    "",
    ""
  ];

  const suffixes = [
    "",
    " 😄",
    " 🤖",
    " (semoga membantu ya!)",
    ""
  ];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return prefix + text + suffix;
}

// 🔥 Confidence tone
function addConfidenceTone(text: string): string {
  const tones = [
    text,
    "Berdasarkan dataku, " + text,
    "Dari analisis yang aku lakukan, " + text,
    text + " 🔍",
    "Secara teknis, " + text
  ];

  return tones[Math.floor(Math.random() * tones.length)];
}

// 🔥 Thinking effect
function addThinking(text: string): string {
  const thinking = [
    "⏳ Memproses...",
    "🧠 Menganalisis pola...",
    "⚙️ Menyusun respon terbaik...",
    ""
  ];

  const t = thinking[Math.floor(Math.random() * thinking.length)];
  return t ? t + "\n\n" + text : text;
}

// 🔥 Signature AI
function addSignature(text: string): string {
  const signatures = [
    "\n\n— AI Assistant Yehuda 🤖",
    "",
    ""
  ];

  return text + signatures[Math.floor(Math.random() * signatures.length)];
}


// Add human-like imperfection
function addNaturalVariation(text: string): string {
  const variations = [
    text,
    text.replace(/\.$/, "..."),
    text + " 👍",
    text.replace("adalah", "itu sebenarnya"),
    text
  ];

  return variations[Math.floor(Math.random() * variations.length)];
}

// Contextual follow-up
function addFollowUp(intent: Intent): string {
  const followUps: Record<string, string[]> = {
    greeting: [
      "Mau mulai dari skill, project, atau AI yang dia buat?",
      "Aku bisa jelaskan semuanya secara teknis juga loh."
    ],
    skills: [
      "Bagian mana yang paling menarik buat kamu? AI atau Web?",
      "Aku bisa breakdown sampai level coding kalau mau."
    ],
    experience: [
      "Project AI-nya cukup kompleks, mau aku jelaskan detail?",
      "Atau kamu lebih tertarik hasil akhirnya?"
    ],
    certification: [
      "Mau aku jelaskan sertifikat mana yang paling impactful?",
      "Atau kamu lagi cari value untuk CV?"
    ],
    random: [
      "Coba arahkan ke AI, skill, atau project biar aku bisa bantu maksimal.",
      "Atau kamu lagi eksplor kemampuan Yehuda?"
    ]
  };

  const list = followUps[intent];
  if (!list) return "";

  return "\n\n💡 " + list[Math.floor(Math.random() * list.length)];
}



/* =========================
   RESPONSE GENERATOR
========================= */

function generateReply(intent: Intent): string {
  const getRand = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  let baseReply = "";

  switch (intent) {
    case "greeting":
      baseReply = getRand(responseBank.greeting);
      break;

    case "mood":
      baseReply = getRand(responseBank.mood);
      break;

    case "thanks":
      baseReply = getRand(responseBank.thanks);
      break;

    case "joke":
      baseReply = getRand(responseBank.joke);
      break;

    case "philosophical":
      baseReply = getRand(responseBank.philosophical);
      break;

    case "random":
      baseReply = getRand(responseBank.random);
      break;

    case "career":
      baseReply = 'Yehuda Yura Mempunya Visi dan Misi ia Berharap Masa depan itu seperti mimpi yang harus kita wujudkan dengan usaha dan kerja keras sama seperti yehuda yang sangat suka menjadi seorang AI Enginer Supaya Bisa membuat sistem modern yang sangat bermanfaat bagi seluruh manusia masa sekarang dan masa depan.';
      break;

    case "aidanml":
      baseReply = 'Artificial Intelligence atau AI adalah kecerdasan Buatan yaitu simfoni antara logika manusia dan presisi mesin. Bagi yehuda, setiap algoritma adalah langkah untuk melampaui batas imajinasi dan menciptakan teknologi yang mampu memahami dunia.';
      break;

    case "identity":
      baseReply = `Yehuda Putra Yura adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Manado. Ia sangat antusias dalam bidang Artificial Intelligence (AI), khususnya Machine Learning dan Computer Vision Serta dalam mengolah data skala besar yehuda sangat mahir di bidang itu. Uniknya, Yehuda juga jago mengintegrasikan model cerdas tersebut ke dalam ekosistem web modern.`;
      break;

    case "education":
      baseReply = `🎓 **Riwayat Pendidikan**

• **Politeknik Negeri Manado** (2023–Sekarang): D4 Teknik Informatika.
• **SMK Prisma Pioneer Manado** (2020–2023): Teknik Komputer dan Jaringan.

Ia membangun pondasi IT yang kuat sejak bangku sekolah menengah!`;
      break;

    case "skills":
      baseReply = `🧠 **Skill & Teknologi**

🔹 **AI Core**: Python, Machine Learning, Computer Vision, Data Analysis.
🔹 **Development**: HTML/CSS, JavaScript, PHP, FastAPI.
🔹 **Infrastructure**: MySQL, IT Support, & Jaringan.`;
      break;

    case "experience":
      baseReply = `🛠️ **Jejak Pengalaman**
      
• **Home Credit Indonesia** (2026): Data Scientist (Virtual Internship). Mengolah ±300.000 data nasabah dengan model Random Forest & Logistic Regression (ROC AUC > 0.7).
• **Kominfo Manado** (2022): Magang IT Support Selama 3 Bulan Sebagai IT Staf dalam Pemeliharaan Sistem Dan Sebagai Tim Multimedia Di Pemerintah Kota Manado .
• **AI Projects**: Mengembangkan Face Recognition, AI Assistant personal, Sistem Cerdas Berbasis AI untuk Monitoring dan Prediksi Gangguan Jaringan Internet di Daerah Sinyal Lemah.
• **Web & IoT**: Implementasi dashboard cerdas berbasis web.`;
      break;

    case "certification":
      baseReply = `📜 **Pencapaian & Lisensi**
📜 **Microsoft Certified**: Azure AI Engineer Associate - Score: 862. 
📜 **Home Credit x Rakamin**: Data Scientist (Predikat: Excellent - 89.3/100).      
🏆 **Juara 2 Coding Robotic IoT** – GMIM (2025).
📜 **BNSP** Junior Web Developer.
📜 **Cisco**: PCAP Python.
📜 **Dicoding**: Membangun Aplikasi Generative AI dengan Microsoft Azure.
📜 **Komdigi**: Big Data Using Python.
📜 **AI Singapore**: AWS Regional LLM League.`;
      break;

    case "contact":
      baseReply = `📬 **Jalur Komunikasi**

📧 Email: yehuda.ai.bot@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/yehuda-yura-a0694b2b5
📍 Lokasi: Manado, Indonesia.`;
      break;

    default:
      baseReply = "Aku belum terlalu paham maksudmu, tapi aku sangat paham soal Yehuda. Mau tanya tentang skill atau project-nya? 😊";
  }

  // 🔥 INI YANG BIKIN KELIATAN AI MODERN
  let finalReply = baseReply;

  finalReply = addNaturalVariation(finalReply);
  finalReply = addConfidenceTone(finalReply);
  finalReply = addTypingEffect(finalReply);
  finalReply = addThinking(finalReply);
  finalReply += addFollowUp(intent);
  finalReply = addSignature(finalReply);

  return finalReply;
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
