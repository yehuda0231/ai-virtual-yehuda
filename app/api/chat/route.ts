import { NextResponse } from "next/server";

type Intent =
  | "identity"
  | "skills"
  | "experience"
  | "education"
  | "certification"
  | "career"
  | "contact"
  | "random"
  | "unknown";

/* =========================
   INTENT DETECTION
========================= */
function detectIntent(message?: string, intent?: string): Intent {
  if (intent) return intent as Intent;
  if (!message) return "unknown";

  const q = message.toLowerCase();

  if (q.includes("siapa") || q.includes("nama") || q.includes("tentang"))
    return "identity";

  if (q.includes("skill") || q.includes("keahlian") || q.includes("teknologi"))
    return "skills";

  if (
    q.includes("pengalaman") ||
    q.includes("kerja") ||
    q.includes("magang") ||
    q.includes("projek")
  )
    return "experience";

  if (
    q.includes("pendidikan") ||
    q.includes("kuliah") ||
    q.includes("sekolah")
  )
    return "education";

  if (
    q.includes("sertifikat") ||
    q.includes("prestasi") ||
    q.includes("kompetisi")
  )
    return "certification";

  if (q.includes("tujuan") || q.includes("karier") || q.includes("career"))
    return "career";

  if (
    q.includes("kontak") ||
    q.includes("hubungi") ||
    q.includes("email") ||
    q.includes("linkedin")
  )
    return "contact";

  return "random";
}

/* =========================
   RESPONSE GENERATOR
========================= */
function generateReply(intent: Intent): string {
  switch (intent) {
    case "identity":
      return `
Yehuda Putra Yura adalah mahasiswa aktif D4 Teknik Informatika di Politeknik Negeri Manado dengan fokus utama pada Artificial Intelligence (AI).

Ia memiliki minat kuat pada pengembangan AI yang aplikatif, khususnya Machine Learning, Computer Vision, dan sistem AI berbasis data. Yehuda terbiasa membangun solusi menggunakan pendekatan data-driven dan memiliki pemahaman integrasi AI ke dalam sistem berbasis web.
      `.trim();

    case "education":
      return `
Riwayat pendidikan Yehuda Putra Yura adalah sebagai berikut:

• Saat ini menempuh pendidikan **D4 Teknik Informatika** di **Politeknik Negeri Manado** (2023–sekarang), dengan fokus pada Artificial Intelligence, pengolahan data, dan pengembangan sistem.

• Lulusan **SMK Prisma Pioneer Manado**, jurusan **Teknik Komputer dan Jaringan** (2020–2023), dengan dasar kuat di jaringan komputer, perakitan perangkat, dan sistem IT dasar.

Latar belakang pendidikan ini membentuk kombinasi kemampuan teknis IT dan pengembangan AI yang kuat.
      `.trim();

    case "skills":
      return `
Keahlian utama Yehuda Putra Yura meliputi:

🔹 **AI & Data**
- Python
- Machine Learning
- Computer Vision
- Deep Learning (dasar)
- Pengolahan dan analisis data

🔹 **Web & Sistem**
- HTML, CSS, JavaScript
- PHP
- FastAPI
- Integrasi AI ke aplikasi web

🔹 **Database**
- MySQL
- phpMyAdmin

🔹 **IT Support & Tools**
- Microsoft Word, Excel, PowerPoint
- Instalasi Windows & troubleshooting
- Jaringan komputer dasar

Skill ini mendukung pengembangan sistem AI dari sisi backend hingga deployment dasar.
      `.trim();

    case "experience":
      return `
Pengalaman profesional Yehuda Putra Yura mencakup:

• **Magang di Dinas Komunikasi dan Informatika Kota Manado (2022)**  
  – Berperan sebagai IT Support  
  – Membantu instalasi dan pemeliharaan sistem  
  – Terlibat dalam pembuatan konten digital dan dokumentasi multimedia  
  – Mendapat sertifikat resmi sebagai bukti kompetensi

• **Proyek AI & IoT**
  – Sistem absensi wajah berbasis AI  
  – Proyek IoT dan AI untuk keperluan edukasi  

Pengalaman ini memperkuat pemahaman implementasi AI di dunia nyata.
      `.trim();

    case "certification":
      return `
Sertifikasi & prestasi Yehuda Putra Yura antara lain:

🏆 Juara 2 Kompetisi Coding Robotic IoT – Festival Media Remaja GMIM (2025)

📜 Sertifikasi Kompetensi Junior Web Developer – BNSP (2024)  
📜 Sertifikasi Office Perkantoran – BNSP (2023)  
📜 Sertifikasi Data Scientist – Home Credit Indonesia x Rakamin Academy (2025)  
📜 Sertifikasi PCAP: Programming Essentials in Python – OpenEDG & Cisco Networking Academy (2024)  
📜 Sertifikat Pelatihan Big Data using Python – Digital Talent Scholarship (2024)  
📜 National AI Student Challenge 2025 – AWS Regional LLM League (AI Singapore)

Sertifikasi ini menunjukkan komitmen Yehuda dalam pengembangan kompetensi profesional.
      `.trim();

    case "career":
      return `
Tujuan karier Yehuda Putra Yura adalah berkarier sebagai **AI Engineer**.

Ia berfokus pada pengembangan solusi Artificial Intelligence yang:
• Aplikatif  
• Berdampak nyata  
• Dapat digunakan oleh masyarakat luas  

Dalam jangka panjang, Yehuda ingin berkontribusi pada pengembangan teknologi AI di bidang edukasi, layanan publik, dan sistem berbasis data.
      `.trim();

    case "contact":
      return `
Anda dapat menghubungi Yehuda Putra Yura melalui:

📧 Email: yehuda.ai.bot@gmail.com  
🔗 LinkedIn: linkedin.com/in/yehuda-yura-a0694b25  
📍 Domisili: Manado, Indonesia
      `.trim();

    case "random":
      return `
Saya adalah AI Assistant pribadi Yehuda Putra Yura.

Anda dapat bertanya tentang:
• Profil singkat  
• Pendidikan  
• Skill & teknologi  
• Pengalaman kerja & proyek  
• Sertifikasi  
• Tujuan karier  

Silakan pilih tombol di bawah atau ajukan pertanyaan bebas 🙂
      `.trim();

    default:
      return "Silakan ajukan pertanyaan tentang Yehuda Putra Yura 🙂";
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
