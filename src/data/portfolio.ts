export const portfolio = {
  person: {
    name: "Muhammad Wahyu Anggana",
    primaryRole: "Web Developer & Application Support",
    secondaryRole: "IT Support · Network Monitoring",
    location: "Semarang, Jawa Tengah, Indonesia",
    email: "wahyuanggana86@gmail.com",
    phone: "0821 3990 7254",
    summary:
      "Fresh graduate S1 Informatika Universitas Muhammadiyah Semarang dengan pengalaman magang dan freelance dalam pengembangan website, sistem informasi, pengelolaan data digital, dan dukungan kebutuhan pengguna.",
    statement:
      "Saya membangun sistem web dan alur digital yang membantu pekerjaan sehari-hari menjadi lebih terstruktur, mudah dicari, dan mudah digunakan.",
    links: {
      github: "https://github.com/MuhammadWahyuAnggana",
      linkedin: "https://www.linkedin.com/in/muhammad-wahyu-anggana-3b8120337/",
      instagram: "https://www.instagram.com/wahyuangganaaa/",
    },
    cv: {
      web: "/cv/Muhammad-Wahyu-Anggana-Web-Developer.pdf",
      it: "/cv/Muhammad-Wahyu-Anggana-IT-Support-Network.pdf",
    },
  },

  facts: [
    { value: "3.80", label: "IPK / 4.00" },
    { value: "40%", label: "reduksi waktu pencarian arsip" },
    { value: "2026", label: "S1 Informatika selesai" },
  ],

  projects: [
    {
      id: "01",
      title: "Sistem Arsip Digital Pelanggan PDAM",
      category: "Internal Web Application",
      year: "2024",
      image: "/images/arsip-pdam.png",
      href: "https://arsip-pdam.vercel.app/",
      role: "Web Developer Intern",
      organization: "PDAM Tirta Moedal Kota Semarang",
      description:
        "Aplikasi pengarsipan dokumen pelanggan berbasis Next.js dan Supabase untuk memusatkan data, hasil pemindaian, dan proses pencarian dokumen yang sebelumnya lebih manual.",
      contribution: [
        "Autentikasi pengguna dan pengelolaan metadata pelanggan",
        "Upload berkas, cloud storage, pencarian, dan akses kembali dokumen",
        "Mendukung alur arsip yang lebih terstruktur dengan waktu pencarian dilaporkan berkurang hingga 40%",
      ],
      stack: ["Next.js", "Supabase", "Cloud Storage", "Document Workflow"],
    },
    {
      id: "02",
      title: "Jagadhita Digital — Company Profile",
      category: "Company Website",
      year: "2025—Now",
      image: "/images/jagadhita.png",
      href: "https://www.jagadhitadigital.com/",
      role: "Web Developer — Freelance",
      organization: "PT Jagadhita Digital Nusantara",
      description:
        "Website perusahaan yang digunakan sebagai company profile, kanal informasi layanan, dan etalase portofolio digital untuk calon klien.",
      contribution: [
        "Mengembangkan serta memperbarui halaman dan konten website",
        "Menjaga informasi layanan dan proyek tetap relevan dengan kebutuhan perusahaan",
        "Berkoordinasi dengan tim dan membantu komunikasi awal kebutuhan sistem atau layanan digital",
      ],
      stack: ["Web Development", "Content Management", "Team Coordination"],
    },
  ],

  experience: [
    {
      period: "Okt 2025 — Sekarang",
      role: "Web Developer — Freelance",
      company: "PT Jagadhita Digital Nusantara",
      location: "Semarang, Jawa Tengah",
      summary:
        "Pengembangan dan pemeliharaan website perusahaan, pembaruan konten layanan dan portofolio, serta koordinasi kebutuhan website bersama tim.",
    },
    {
      period: "Sep 2024 — Des 2024",
      role: "Web Developer — Magang",
      company: "PDAM Tirta Moedal Kota Semarang",
      location: "Semarang, Jawa Tengah",
      summary:
        "Mengembangkan Sistem Arsip Digital pelanggan menggunakan Next.js dan Supabase, termasuk autentikasi, metadata, upload dokumen, cloud storage, pencarian, dan retrieval arsip.",
    },
    {
      period: "Feb 2023 — Agu 2023",
      role: "Humas Program Studi — Freelance",
      company: "Universitas Muhammadiyah Semarang",
      location: "Semarang, Jawa Tengah",
      summary:
        "Mengelola informasi dan konten digital program studi serta berkoordinasi untuk menjaga publikasi akademik tetap teratur dan mudah dipahami.",
    },
  ],

  education: [
    {
      school: "Universitas Muhammadiyah Semarang",
      degree: "S1 Informatika · IPK 3,80 / 4,00",
      period: "Sep 2022 — Agu 2026",
      note: "Seluruh proses akademik selesai; Surat Keterangan Lulus (SKL) tersedia.",
    },
    {
      school: "SMA Negeri 11 Semarang",
      degree: "Jurusan IPA",
      period: "Jul 2019 — Mei 2022",
      note: "",
    },
  ],

  organizations: [
    {
      period: "Jan 2024 — Agu 2024",
      role: "Kepala Departemen Riset dan Teknologi",
      name: "Himpunan Mahasiswa Informatika (HIMAFOR)",
    },
    {
      period: "Jun 2024 — Okt 2024",
      role: "Tim Pelaksana",
      name: "PPK Ormawa HIMAFOR — Desa Jragung",
    },
    {
      period: "Agu 2023 — Sep 2023",
      role: "Anggota Sie Humas",
      name: "Permikomnas",
    },
  ],

  capabilities: [
    {
      index: "A",
      title: "Web Development",
      items: ["JavaScript", "TypeScript", "PHP", "Python", "Next.js", "React.js (dasar)"],
    },
    {
      index: "B",
      title: "Application & Data",
      items: ["Supabase", "REST API (dasar)", "Database dasar", "Cloud storage", "Data processing", "Back-end integration"],
    },
    {
      index: "C",
      title: "IT Support & Monitoring",
      items: ["Zabbix", "Grafana", "Network monitoring", "Network data analysis (dasar)", "Troubleshooting dasar", "User support"],
    },
    {
      index: "D",
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "Postman (dasar)", "Google Colab", "Microsoft Office", "Team coordination"],
    },
  ],

  certificates: [
    {
      title: "Award of Final Exam Completion — Java Programming",
      issuer: "Oracle Academy",
      date: "17 Jan 2024",
      href: null,
    },
    {
      title: "Ethical Hacker For Dummies (Micro Skill)",
      issuer: "Digital Talent Scholarship · Komdigi",
      date: "Jun 2025",
      href: "https://drive.google.com/file/d/1Nfr8QrfjBTmvXWoPkFFLHERs27OTsW8_/view",
    },
    {
      title: "Pemasaran Digital dengan Kecerdasan Buatan (AI) untuk Wirausaha",
      issuer: "Digital Talent Scholarship · Komdigi",
      date: "Mei 2025",
      href: "https://drive.google.com/file/d/10rfDNDwg5F32CiLYVZbKTv99qHS2KZjI/view",
    },
    {
      title: "Pentingnya Menjaga Keamanan Digital: Perlindungan Diri di Dunia Maya",
      issuer: "Komdigi",
      date: "Sep 2025",
      href: "https://drive.google.com/file/d/1G6HUjMSRKK6iiiiVahnuubw2UUc2T3o5/view",
    },
    {
      title: "Pengenalan Produk Digital dan Desain Grafis Bagi Angkatan Kerja Muda",
      issuer: "Komdigi",
      date: "Sep 2025",
      href: "https://drive.google.com/file/d/1V8IhaepxSArYe_hLN3ASc_z_v8S0g9TB/view",
    },
    {
      title: "Pemanfaatan Aplikasi Editing Video untuk Konten Produk",
      issuer: "Komdigi",
      date: "Sep 2025",
      href: "https://drive.google.com/file/d/1pse4cmpOZmild0ifhDwii9PuKCVFViCv/view",
    },
    {
      title: "Optimasi Instagram dengan Insight",
      issuer: "Komdigi",
      date: "Sep 2025",
      href: "https://drive.google.com/file/d/1xvEVayCNsMiL1B_kDnj9NZy_faZ7YT7B/view",
    },
    {
      title: "Social Media Management untuk Brand Digital",
      issuer: "Komdigi",
      date: "Des 2025",
      href: "https://drive.google.com/file/d/15tSf7E4I5ZF_Dyz5QwbNS-jRRpFuhR6S/view",
    },
  ],

  languages: ["Bahasa Indonesia — mahir", "Bahasa Inggris — intermediate"],
} as const;
