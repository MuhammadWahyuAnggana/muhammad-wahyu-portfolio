import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { MotionLayer } from "@/components/MotionLayer";
import { PrintButton } from "@/components/PrintButton";
import { PrintPortfolio } from "@/components/PrintPortfolio";
import { portfolio } from "@/data/portfolio";

const {
  person,
  facts,
  projects,
  experience,
  education,
  organizations,
  capabilities,
  certificates,
  languages,
} = portfolio;

function SectionHead({ index, label, title, note }: { index: string; label: string; title: string; note?: string }) {
  return (
    <div className="section-head" data-reveal>
      <div className="section-head-index">{index}</div>
      <div className="section-head-copy">
        <span className="section-head-label">{label}</span>
        <h2>{title}</h2>
      </div>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

export default function Home() {
  const marqueeItems = [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Application Support",
    "Zabbix",
    "Grafana",
    "Git / GitHub",
    "Problem Solving",
  ];

  return (
    <>
      <div className="screen-site">
        <MotionLayer />
        <div className="ambient-field" aria-hidden="true">
          <span className="ambient-orb ambient-orb-a" />
          <span className="ambient-orb ambient-orb-b" />
          <span className="ambient-orb ambient-orb-c" />
          <span className="ambient-grid" />
        </div>

        <header className="site-header">
          <a href="#top" className="wordmark magnetic" data-magnetic aria-label="Kembali ke atas">
            MWA<span>.</span>
          </a>

          <nav className="site-nav" aria-label="Navigasi portfolio">
            <a href="#work" data-nav="work">Work</a>
            <a href="#experience" data-nav="experience">Experience</a>
            <a href="#capabilities" data-nav="capabilities">Capabilities</a>
            <a href="#credentials" data-nav="credentials">Credentials</a>
          </nav>

          <div className="header-actions">
            <PrintButton />
            <a className="header-contact magnetic" data-magnetic href={`mailto:${person.email}`}>
              Contact <ArrowUpRight size={14} />
            </a>
          </div>
        </header>

        <main id="top">
          <section className="hero shell">
            <div className="hero-topline" data-reveal>
              <span>Portfolio / 2026</span>
              <span>{person.location}</span>
              <span>Available for opportunities</span>
            </div>

            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-role" data-reveal>
                  <span>{person.primaryRole}</span>
                  <span className="hero-role-cycle" aria-hidden="true">
                    <i>WEB SYSTEMS</i>
                    <i>APPLICATION SUPPORT</i>
                    <i>IT OPERATIONS</i>
                  </span>
                </div>

                <h1 className="hero-title" aria-label={person.name}>
                  <span className="reveal-line"><span>Muhammad Wahyu</span></span>
                  <span className="reveal-line"><span className="accent-word">Anggana</span></span>
                </h1>

                <div className="hero-bottom" data-reveal>
                  <p>{person.statement}</p>
                  <div className="hero-actions">
                    <a className="primary-link magnetic" data-magnetic href="#work">
                      Selected work <ArrowDownRight size={16} />
                    </a>
                    <a className="secondary-link magnetic" data-magnetic href={person.cv.web} target="_blank" rel="noreferrer">
                      <Download size={15} /> CV Web Developer
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-visual" data-reveal>
                <div className="portrait-card" data-tilt>
                  <div className="portrait-grid" aria-hidden="true" />
                  <Image
                    src="/images/profile.png"
                    alt="Muhammad Wahyu Anggana"
                    fill
                    sizes="(max-width: 780px) 82vw, 29vw"
                    priority
                  />
                  <span className="portrait-tag portrait-tag-a">WEB</span>
                  <span className="portrait-tag portrait-tag-b">APP SUPPORT</span>
                  <span className="portrait-marker portrait-marker-a" aria-hidden="true">+</span>
                  <span className="portrait-marker portrait-marker-b" aria-hidden="true">+</span>
                </div>
                <div className="portrait-meta">
                  <span>Fresh Graduate · S1 Informatika</span>
                  <span>Semarang, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="hero-facts" data-reveal>
              {facts.map((fact) => (
                <div className="hero-fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
              <div className="hero-alt-cv">
                <a href={person.cv.it} target="_blank" rel="noreferrer">
                  <Download size={14} /> CV IT Support / Network
                </a>
              </div>
            </div>
          </section>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`}><i />{item}</span>
              ))}
            </div>
          </div>

          <section className="approach shell" data-reveal>
            <div className="approach-copy">
              <span className="micro-label">How I work</span>
              <h2>Teknologi yang terasa <em>berguna</em>, bukan sekadar terlihat kompleks.</h2>
              <p>
                Saya tertarik pada pekerjaan yang dimulai dari masalah nyata: memahami kebutuhan pengguna,
                merapikan alur, lalu mengubahnya menjadi sistem yang lebih mudah dipakai dan dipelihara.
              </p>
            </div>

            <div className="approach-steps">
              <article>
                <span>01</span>
                <div><strong>Understand</strong><p>Memahami konteks pengguna dan proses kerja.</p></div>
                <ArrowUpRight size={18} />
              </article>
              <article>
                <span>02</span>
                <div><strong>Structure</strong><p>Menyederhanakan data, informasi, dan alur aplikasi.</p></div>
                <ArrowUpRight size={18} />
              </article>
              <article>
                <span>03</span>
                <div><strong>Build</strong><p>Mengimplementasikan solusi yang bisa digunakan dan dirawat.</p></div>
                <ArrowUpRight size={18} />
              </article>
            </div>
          </section>

          <section className="motion-stage" aria-label="Cara saya bekerja">
            <div className="motion-stage-grid" aria-hidden="true" />
            <div className="motion-stage-glow motion-stage-glow-a" aria-hidden="true" />
            <div className="motion-stage-glow motion-stage-glow-b" aria-hidden="true" />
            <div className="motion-stage-inner shell">
              <div className="motion-stage-topline">
                <span>PROCESS / 03 MOVES</span>
                <span>SCROLL TO EXPLORE</span>
              </div>
              <div className="motion-stage-words">
                <article className="motion-word" data-motion-word>
                  <span className="motion-word-index">01</span>
                  <h2>BUILD</h2>
                  <p>Mengubah kebutuhan menjadi sistem web yang bisa digunakan.</p>
                </article>
                <article className="motion-word" data-motion-word>
                  <span className="motion-word-index">02</span>
                  <h2>SUPPORT</h2>
                  <p>Menjaga informasi, alur aplikasi, dan kebutuhan pengguna tetap berjalan.</p>
                </article>
                <article className="motion-word" data-motion-word>
                  <span className="motion-word-index">03</span>
                  <h2>IMPROVE</h2>
                  <p>Merapikan proses agar lebih cepat, jelas, dan mudah dipelihara.</p>
                </article>
              </div>
              <div className="motion-stage-meter" aria-hidden="true"><span /></div>
            </div>
          </section>

          <section id="work" className="section shell">
            <SectionHead
              index="01"
              label="Selected work"
              title="Project yang punya konteks nyata."
              note="Dua project utama yang paling mewakili pengalaman saya membangun dan mengelola sistem web."
            />

            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project-row ${index % 2 ? "project-row-reverse" : ""}`} key={project.id} data-reveal data-project-story data-project-index={index}>
                  <a
                    className="project-media"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    data-project-card
                    aria-label={`Buka ${project.title}`}
                  >
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 58vw" />
                    <div className="project-scan" aria-hidden="true" />
                    <span className="project-pointer" aria-hidden="true">VIEW ↗</span>
                    <div className="project-frame" aria-hidden="true">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </a>

                  <div className="project-content">
                    <div className="project-progress" aria-hidden="true"><span /></div>
                    <div className="project-number">{project.id}</div>
                    <p className="project-org">{project.organization}</p>
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                    <p className="project-description">{project.description}</p>

                    <ul className="project-contribution">
                      {project.contribution.map((item) => <li key={item}>{item}</li>)}
                    </ul>

                    <div className="project-stack">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>

                    <a className="project-link magnetic" data-magnetic href={project.href} target="_blank" rel="noreferrer">
                      Open live project <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="section section-soft">
            <div className="shell">
              <SectionHead
                index="02"
                label="Experience"
                title="Kerja, belajar, dan menyelesaikan masalah."
                note="Pengalaman yang membentuk cara saya berkomunikasi, membangun sistem, dan mendukung kebutuhan pengguna."
              />

              <div className="experience-list">
                <div className="experience-line" aria-hidden="true"><span /></div>
                {experience.map((item, index) => (
                  <article className="experience-row" key={`${item.company}-${item.period}`} data-reveal>
                    <span className="experience-index">0{index + 1}</span>
                    <div className="experience-main">
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                    <p className="experience-copy">{item.summary}</p>
                    <div className="experience-meta">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="capabilities" className="section shell">
            <SectionHead
              index="03"
              label="Capabilities"
              title="Lebih dari sekadar daftar tools."
              note="Kemampuan saya dikelompokkan berdasarkan bagaimana teknologi tersebut digunakan dalam pekerjaan."
            />

            <div className="capability-list">
              {capabilities.map((group) => (
                <article className="capability-row" key={group.title} data-reveal data-spotlight>
                  <span className="capability-index">{group.index}</span>
                  <h3>{group.title}</h3>
                  <div className="capability-items">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <ArrowUpRight size={18} />
                </article>
              ))}
            </div>
          </section>

          <section className="profile-band">
            <div className="shell profile-band-grid">
              <div className="profile-band-copy" data-reveal>
                <span className="micro-label">Profile</span>
                <h2>{person.summary}</h2>
                <div className="language-row">
                  {languages.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>

              <div className="profile-details" data-reveal>
                <div>
                  <span className="detail-label">Education</span>
                  {education.map((item) => (
                    <article key={item.school}>
                      <h3>{item.school}</h3>
                      <p>{item.degree}</p>
                      <span>{item.period}</span>
                      {item.note ? <small>{item.note}</small> : null}
                    </article>
                  ))}
                </div>
                <div>
                  <span className="detail-label">Organizations</span>
                  {organizations.map((item) => (
                    <article key={`${item.name}-${item.period}`}>
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                      <span>{item.period}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="credentials" className="section shell">
            <SectionHead
              index="04"
              label="Credentials"
              title="Belajar secara terukur."
              note="Pelatihan yang mendukung kemampuan pengembangan aplikasi, keamanan digital, dan komunikasi produk."
            />

            <div className="credential-grid">
              {certificates.map((cert, index) => {
                const body = (
                  <>
                    <span className="credential-index">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                    </div>
                    <span className="credential-date">{cert.date}</span>
                    <ArrowUpRight size={17} />
                  </>
                );

                return cert.href ? (
                  <a className="credential-card" href={cert.href} target="_blank" rel="noreferrer" key={cert.title} data-reveal>
                    {body}
                  </a>
                ) : (
                  <div className="credential-card credential-card-static" key={cert.title} data-reveal>{body}</div>
                );
              })}
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="shell footer-grid">
            <div className="footer-main" data-reveal>
              <span className="micro-label">Let&apos;s work together</span>
              <h2>Punya kebutuhan web atau sistem yang perlu dibuat lebih rapi?</h2>
              <a className="footer-email magnetic" data-magnetic href={`mailto:${person.email}`}>
                {person.email} <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="footer-contact">
              <div>
                <span className="detail-label">Contact</span>
                <a href={`mailto:${person.email}`}><Mail size={14} />{person.email}</a>
                <span><MapPin size={14} />{person.location}</span>
              </div>
              <div>
                <span className="detail-label">Social</span>
                <a href={person.links.github} target="_blank" rel="noreferrer"><Github size={14} />GitHub</a>
                <a href={person.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} />LinkedIn</a>
                <a href={person.links.instagram} target="_blank" rel="noreferrer"><Instagram size={14} />Instagram</a>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 Muhammad Wahyu Anggana</span>
              <span>Designed for web · Built for print</span>
            </div>
          </div>
        </footer>
      </div>

      <PrintPortfolio />
    </>
  );
}
