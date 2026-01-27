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
  | "unknown";

/* =========================
   SIMPLE NLP / INTENT
========================= */
function detectIntent(message = "", intent?: string): Intent {
  if (intent) return intent as Intent;

  const q = message.toLowerCase();

  if (q.match(/halo|hai|hello|hi|selamat/)) return "greeting";
  if (q.match(/terima kasih|makasih|thanks/)) return "thanks";
  if (q.match(/lucu|joke|bercanda/)) return "joke";

  if (q.match(/siapa|nama|tentang kamu|profil/)) return "identity";
  if (q.match(/skill|keahlian|teknologi|bisa apa/)) return "skills";
  if (q.match(/pengalaman|kerja|magang|project/)) return "experience";
  if (q.match(/pendidikan|kuliah|sekolah/)) return "education";
  if (q.match(/sertifikat|prestasi|kompetisi/)) return "certification";
  if (q.match(/tujuan|karier|cita-cita/)) return "career";
  if (q.match(/kontak|email|linkedin|hubungi/)) return "contact";

  return "random";
}

/* =========================
   RANDOM CHAT RESPONSES
========================= */
const randomReplies = [
  "Menarik 🤖 Bisa kamu jelaskan lebih detail?",
  "Pertanyaan yang bagus! Tapi kalau tentang Yehuda, aku bisa jelaskan lebih lengkap 😄",
  "Aku siap bantu! Mau bahas skill, project, atau hal santai dulu?",
  "Hehe 😄 Aku AI Assistant-nya Yehuda, tapi aku bisa diajak ngobrol juga kok.",
  "Kalau mau serius bisa, mau santai juga boleh 😉",
];

/* =========================
   RESPONSE GENERATOR
========================= */
function generateReply(intent: Intent): string {
  switch (intent) {
    case "greeting":
      return "Halo 👋 Senang bertemu denganmu! Aku AI Assistant milik Yehuda Yura. Mau tanya apa hari ini?";

    case "thanks":
      return "Sama-sama 😊 Kalau masih penasaran tentang Yehuda atau mau ngobrol santai, tinggal tanya ya!";

    case "joke":
      return "Kenapa programmer suka kopi? ☕ Karena tanpa kopi, kodenya cuma jadi komentar 😄";

    case "identity":
      return `
Yehuda Putra Yura adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Manado.

Ia berfokus pada Artificial Intelligence (AI), khususnya Machine Learning, Computer Vision, dan pengembangan sistem berbasis data. Selain AI, Yehuda juga memiliki kemampuan integrasi AI ke dalam aplikasi web modern.
      `.trim();

    case "education":
      return `
🎓 **Pendidikan Yehuda Putra Yura**

• D4 Teknik Informatika – Politeknik Negeri Manado (2023–sekarang)  
• SMK Prisma Pioneer Manado – Teknik Komputer dan Jaringan (2020–2023)

Latar belakang ini membentuk kombinasi kuat antara AI dan sistem IT.
      `.trim();

    case "skills":
      return `
🧠 **Skill & Teknologi**

🔹 AI & Data  
- Python  
- Machine Learning  
- Computer Vision  
- Deep Learning (dasar)  
- Data Analysis  

🔹 Web & Sistem  
- HTML, CSS, JavaScript  
- PHP, FastAPI  
- Integrasi AI ke Web  

🔹 Database  
- MySQL  

🔹 IT Support  
- Troubleshooting  
- Office & jaringan dasar
      `.trim();

    case "experience":
      return `
🛠️ **Pengalaman**

• Magang IT Support – Diskominfo Manado (2022)  
• Proyek AI: Face Recognition, AI Assistant  
• Proyek IoT & Web  

Pengalaman ini berfokus pada penerapan teknologi secara nyata.
      `.trim();

    case "certification":
      return `
📜 **Sertifikasi & Prestasi**

🏆 Juara 2 Coding Robotic IoT – GMIM (2025)  
📜 BNSP Junior Web Developer  
📜 Data Scientist – Rakamin x Home Credit  
📜 PCAP Python – Cisco  
📜 Big Data using Python – DTS  
📜 AWS Regional LLM League – AI Singapore
      `.trim();

    case "career":
      return `
🎯 **Tujuan Karier**

Yehuda bercita-cita menjadi **AI Engineer** yang membangun solusi AI:
• Aplikatif  
• Berdampak nyata  
• Mudah digunakan masyarakat
      `.trim();

    case "contact":
      return `
📬 **Kontak Yehuda Putra Yura**

📧 Email: yehuda.ai.bot@gmail.com  
🔗 LinkedIn: linkedin.com/in/yehuda-yura-a0694b25  
📍 Manado, Indonesia
      `.trim();

    case "random":
      return randomReplies[Math.floor(Math.random() * randomReplies.length)];

    default:
      return "Aku belum yakin maksud pertanyaannya 🤔 Tapi kamu bisa tanya tentang Yehuda, skill, atau project-nya 😊";
  }
}

/* =========================
   API HANDLER
========================= */
export async function POST(req: Request) {
  const { message, intent } = await req.json();

  const detectedIntent = detectIntent(message, intent);
  const reply = generateReply(detectedIntent);

  return NextResponse.json({ reply });
}
