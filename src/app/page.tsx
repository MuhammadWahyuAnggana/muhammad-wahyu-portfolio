import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Jagadhita Digital",
    eyebrow: "Company Profile / Digital Services",
    description:
      "Website company profile dan layanan digital PT Jagadhita Digital Nusantara. Fokus pada komunikasi layanan yang jelas, struktur informasi yang rapi, dan kebutuhan bisnis.",
    image: "/images/jagadhita.png",
    href: "https://www.jagadhitadigital.com/",
    stack: ["Web Development", "Content", "Digital Operations"],
  },
  {
    index: "02",
    title: "Sistem Arsip Digital PDAM",
    eyebrow: "Internal Tool / Customer Archive",
    description:
      "Sistem arsip pelanggan berbasis web untuk memusatkan dokumen, metadata pelanggan, pencarian, dan akses arsip dalam satu alur kerja digital.",
    image: "/images/arsip-pdam.png",
    href: "https://arsip-pdam.vercel.app/",
    stack: ["Next.js", "Supabase", "Cloud Storage"],
  },
];

const experience = [
  {
    period: "2025 — sekarang",
    role: "Area Operations & Marketing Manager",
    company: "PT Jagadhita Digital Nusantara",
    description:
      "Mengelola operasional lima cabang rental iPhone, strategi promosi, evaluasi target cabang, dan koordinasi kebutuhan digital.",
  },
  {
    period: "2024",
    role: "Web Developer Intern",
    company: "PDAM Tirta Moedal Kota Semarang",
    description:
      "Mengembangkan sistem arsip pelanggan berbasis web untuk mempercepat pencarian dan pengelolaan dokumen pelanggan.",
  },
  {
    period: "2023",
    role: "Humas Prodi · Freelance",
    company: "Universitas Muhammadiyah Semarang",
    description:
      "Mengelola website program studi dan kanal media sosial untuk mendukung penyampaian informasi digital secara konsisten.",
  },
  {
    period: "2024",
    role: "Kepala Departemen Ristek",
    company: "Himpunan Mahasiswa Informatika",
    description:
      "Mengkoordinasikan kegiatan riset dan teknologi serta kolaborasi program kerja organisasi.",
  },
];

const skillGroups = [
  {
    title: "Development",
    items: ["Next.js", "PHP", "Supabase", "Back-End Integration", "GitHub"],
  },
  {
    title: "Data & AI",
    items: ["Python", "Google Colab", "Machine Learning", "Data Processing"],
  },
  {
    title: "Design & Workflow",
    items: ["UI/UX", "Web Design", "Microsoft Office", "Digital Operations"],
  },
];

const certs = [
  ["Pemasaran Digital dengan AI untuk Wirausaha", "10rfDNDwg5F32CiLYVZbKTv99qHS2KZjI"],
  ["Ethical Hacker For Dummies", "1Nfr8QrfjBTmvXWoPkFFLHERs27OTsW8_"],
  ["AI Engineer For Milenial", "1bbzuAKT5AQP8aaRbkUEBpQHd3hdq-g7C"],
  ["Social Media Management untuk Brand Digital", "15tSf7E4I5ZF_Dyz5QwbNS-jRRpFuhR6S"],
  ["Menjaga Data Pribadi dan Pelindungannya", "1xvh6wDjnnisOe179tVXNT9E_-RBZe2v9"],
  ["Produk Digital dan Desain Grafis", "1V8IhaepxSArYe_hLN3ASc_z_v8S0g9TB"],
  ["Editing Video untuk Konten Produk", "1pse4cmpOZmild0ifhDwii9PuKCVFViCv"],
  ["Aspek Pengembangan Produk AI", "1th24adOgS19eBYuHcekH5YiNLH1Se4OD"],
  ["Optimasi Instagram dengan Insight", "1xvEVayCNsMiL1B_kDnj9NZy_faZ7YT7B"],
  ["Keamanan Digital: Perlindungan Diri di Dunia Maya", "1G6HUjMSRKK6iiiiVahnuubw2UUc2T3o5"],
  ["Image & Speech Recognition", "1kTc4lxp2s1H2yWMadM-JpG-QCZzokDDD"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav-row">
          <a href="#top" className="brand" aria-label="Muhammad Wahyu Anggana">
            Muhammad Wahyu Anggana
          </a>
          <nav className="nav-links" aria-label="Navigasi utama">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#certificates">Certificates</a>
          </nav>
          <a className="nav-contact" href="mailto:wahyuanggana86@gmail.com">
            Contact <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-meta">
            <span>Semarang, Indonesia</span>
            <span className="availability"><i /> Open to opportunities</span>
          </div>

          <h1>
            Web developer focused on <span>useful digital products.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Saya Muhammad Wahyu Anggana, fresh graduate Informatika yang bekerja di area web development,
              data processing, dan digital operations.
            </p>
            <a className="hero-link" href="#work">
              Selected work <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <Image
            src="/images/profile.png"
            alt="Muhammad Wahyu Anggana"
            width={900}
            height={1100}
            priority
          />
          <figcaption>
            <span>Muhammad Wahyu Anggana</span>
            <span>Web Development / IT / Digital Operations</span>
          </figcaption>
        </figure>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Selected work</span>
            <h2>Project yang menunjukkan cara saya memecahkan masalah.</h2>
          </div>

          <div className="work-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    className="project-image"
                  />
                </a>

                <div className="project-copy">
                  <div className="project-topline">
                    <span>{project.index}</span>
                    <span>{project.eyebrow}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">
                    View project <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section container split-section">
        <div className="section-aside">
          <span className="section-label">Experience</span>
          <p>
            Pengalaman saya berada di persimpangan antara pengembangan produk digital, komunikasi,
            dan operasional.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.role}-${item.period}`}>
              <div className="experience-period">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}

          <div className="education-row">
            <span>Pendidikan</span>
            <div>
              <strong>S1 Informatika · Universitas Muhammadiyah Semarang</strong>
              <p>2022 — 2026 · IPK 3.80 / 4.00</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <span className="section-label">About & capabilities</span>
            <h2>
              Saya suka pekerjaan yang membuat teknologi terasa <span>sederhana dan berguna.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Saya terbiasa mengembangkan website, mengolah data, dan bekerja dengan kebutuhan operasional.
              Pendekatan saya sederhana: pahami masalahnya, rapikan alurnya, lalu bangun solusi yang mudah dipakai.
            </p>
          </div>
        </div>

        <div className="container skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-column" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="section container certificate-section">
        <div className="section-head certificate-head">
          <span className="section-label">Certificates</span>
          <h2>Learning archive.</h2>
          <p>Klik sertifikat untuk membuka credential asli di Google Drive.</p>
        </div>

        <div className="certificate-grid">
          {certs.map(([name, id], index) => (
            <a
              className="certificate-item"
              key={id}
              href={`https://drive.google.com/file/d/${id}/view`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="certificate-thumb">
                <img
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w800`}
                  alt={`Sertifikat ${name}`}
                  loading="lazy"
                />
              </div>
              <div className="certificate-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <span className="section-label light">Contact</span>
            <h2>Let&apos;s build something useful.</h2>
            <a className="contact-email" href="mailto:wahyuanggana86@gmail.com">
              wahyuanggana86@gmail.com <ArrowUpRight size={28} />
            </a>
          </div>

          <div className="contact-details">
            <a href="tel:+6282139907254"><Phone size={16} /> 0821 3990 7254</a>
            <span><MapPin size={16} /> Semarang, Jawa Tengah</span>
            <a href="https://www.linkedin.com/in/muhammad-wahyu-anggana-3b8120337/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/MuhammadWahyuAnggana" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://www.instagram.com/wahyuangganaaa/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <span>© 2026 Muhammad Wahyu Anggana</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
