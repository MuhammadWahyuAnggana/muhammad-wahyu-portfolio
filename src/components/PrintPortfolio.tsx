import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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

export function PrintPortfolio() {
  return (
    <div className="print-document" aria-hidden="true">
      <section className="print-page print-cover">
        <div className="print-page-number">PORTFOLIO · 2026</div>
        <div className="print-cover-copy">
          <span className="print-kicker">Web Developer · Application Support</span>
          <h1>Muhammad<br />Wahyu <em>Anggana</em></h1>
          <p>{person.statement}</p>
          <div className="print-cover-links">
            <span>{person.email}</span>
            <span>{person.location}</span>
          </div>
        </div>
        <div className="print-cover-visual">
          <div className="print-cover-box">
            <img src="/images/profile.png" alt="Muhammad Wahyu Anggana" loading="eager" decoding="sync" />
          </div>
          <div className="print-cover-code">MWA / WEB · APP · SUPPORT</div>
        </div>
        <div className="print-corner print-corner-a" />
        <div className="print-corner print-corner-b" />
      </section>

      <section className="print-page print-profile-page">
        <div className="print-sidebar">
          <span>01</span>
          <strong>PROFILE</strong>
        </div>
        <div className="print-profile-main">
          <div className="print-section-title">
            <span>ABOUT</span>
            <h2>Membangun solusi digital yang dekat dengan kebutuhan nyata.</h2>
          </div>
          <p className="print-profile-summary">{person.summary}</p>
          <div className="print-facts-grid">
            {facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <div className="print-capability-mini">
            {capabilities.map((group) => (
              <article key={group.title}>
                <span>{group.index}</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="print-page print-divider-page">
        <span className="print-divider-index">02</span>
        <div>
          <p>SELECTED WORK</p>
          <h2>Project yang punya<br />konteks nyata.</h2>
          <span>Web application · company website · document workflow</span>
        </div>
        <div className="print-divider-mark">↘</div>
      </section>

      {projects.map((project, index) => (
        <section className={`print-page print-project-page ${index % 2 ? "print-project-reverse" : ""}`} key={project.id}>
          <div className="print-project-image">
            <img src={project.image} alt={project.title} loading="eager" decoding="sync" />
            <div className="print-project-image-label">
              <span>{project.id}</span>
              <span>{project.category}</span>
            </div>
          </div>
          <div className="print-project-copy">
            <div className="print-project-topline">
              <span>{project.organization}</span>
              <span>{project.year}</span>
            </div>
            <h2>{project.title}</h2>
            <p className="print-project-role">{project.role}</p>
            <p className="print-project-description">{project.description}</p>
            <ul>
              {project.contribution.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="print-project-stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="print-project-url">{project.href.replace(/^https?:\/\//, "")}</div>
          </div>
        </section>
      ))}

      <section className="print-page print-experience-page">
        <div className="print-page-header">
          <span>03 / EXPERIENCE</span>
          <strong>WORK · EDUCATION · ORGANIZATION</strong>
        </div>
        <div className="print-experience-grid">
          <div className="print-experience-list">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.period}`}>
                <span className="print-experience-number">0{index + 1}</span>
                <div>
                  <span className="print-experience-period">{item.period}</span>
                  <h3>{item.company}</h3>
                  <p className="print-experience-role">{item.role}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="print-side-column">
            <div>
              <span className="print-small-label">EDUCATION</span>
              {education.map((item) => (
                <article key={item.school}>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                  <span>{item.period}</span>
                </article>
              ))}
            </div>
            <div>
              <span className="print-small-label">ORGANIZATION</span>
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

      <section className="print-page print-credentials-page">
        <div className="print-page-header">
          <span>04 / CREDENTIALS</span>
          <strong>CONTINUOUS LEARNING</strong>
        </div>
        <div className="print-credentials-intro">
          <h2>Fondasi teknis, keamanan digital, dan komunikasi produk.</h2>
          <p>Pelatihan yang melengkapi pengalaman proyek dan pekerjaan.</p>
        </div>
        <div className="print-credential-grid">
          {certificates.map((cert, index) => (
            <article key={cert.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <strong>{cert.date}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="print-page print-contact-page">
        <div className="print-contact-word">THANK<br />YOU.</div>
        <div className="print-contact-card">
          <span className="print-kicker">Muhammad Wahyu Anggana</span>
          <h2>Let&apos;s build something useful.</h2>
          <div className="print-contact-list">
            <span><Mail size={15} />{person.email}</span>
            <span><Phone size={15} />{person.phone}</span>
            <span><MapPin size={15} />{person.location}</span>
            <span><Github size={15} />github.com/MuhammadWahyuAnggana</span>
            <span><Linkedin size={15} />linkedin.com/in/muhammad-wahyu-anggana-3b8120337</span>
            <span><Instagram size={15} />instagram.com/wahyuangganaaa</span>
          </div>
          <div className="print-language-row">
            {languages.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="print-contact-rule" />
      </section>
    </div>
  );
}
