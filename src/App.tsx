import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  ChevronDown,
  DatabaseZap,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MoveRight,
  Network,
  ShieldCheck
} from "lucide-react";
import "./App.css";
import {
  capabilityGroups,
  caseStudies,
  contactLinks,
  experience,
  impactMetrics,
  profile,
  resumeVariants
} from "./content/profile";

const actionIconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
} as const;

const baseUrl = import.meta.env.BASE_URL;

function assetHref(path: string) {
  return `${baseUrl}${path.replace(/^\//, "")}`;
}

function linkHref(href?: string) {
  if (!href) {
    return "#";
  }

  return href.startsWith("/") ? assetHref(href) : href;
}

function isExternalHref(href?: string) {
  return Boolean(href && /^https?:\/\//.test(href));
}

const resumeLabels = {
  "data-full-stack": "Full-stack resume PDF",
  "product-data-systems": "Systems depth PDF"
} as const;

const capabilityIconMap = [Layers3, ShieldCheck, DatabaseZap, ChartColumnIncreasing];

const workflowStages = [
  {
    step: "Schema Design",
    detail:
      "Source structures, product entities, and validation rules shaped before downstream metrics or model features are trusted."
  },
  {
    step: "Service Design",
    detail:
      "APIs, crawlers, scoring paths, retries, and monitoring keep data movement reliable for product and analytics consumers."
  },
  {
    step: "Feature Systems",
    detail:
      "Signals are normalized, evaluated, selected, documented, and mapped to deterministic AI/ML/DS decision workflows."
  },
  {
    step: "Analytics Layer",
    detail:
      "Dashboards, portfolio reviews, EDA packs, and client-ready narratives close the loop from raw data to decisions."
  }
] as const;

function App() {
  const primaryCaseStudy = caseStudies[0];
  const referenceCaseStudies = caseStudies.slice(1);

  return (
    <div className="page-shell">
      <div className="page-frame">
        <header className="masthead reveal">
          <div>
            <p className="eyebrow">Ashutosh Patel</p>
            <p className="masthead-copy">{profile.availability}</p>
          </div>
          <div className="masthead-links" aria-label="Direct contact links">
            {contactLinks.map((link) => {
              const Icon = actionIconMap[link.label];
              return (
                <a
                  key={link.label}
                  className="masthead-link"
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <Icon aria-hidden="true" size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </header>

        <main>
          <section className="hero reveal" aria-labelledby="hero-title">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-kicker">{profile.title}</p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero-subtitle">
                  Data product ownership from schema and services to features, analytics, and
                  model-ready decisions.
                </p>

                <div className="hero-actions" aria-label="Resume and contact actions">
                  <details className="download-menu">
                    <summary className="action-button action-button-primary">
                      <Download aria-hidden="true" size={17} />
                      <span>Downloads</span>
                      <ChevronDown aria-hidden="true" size={16} />
                    </summary>
                    <div className="download-panel" aria-label="Resume downloads">
                      {resumeVariants.map((resume) => (
                        <a
                          key={resume.id}
                          href={assetHref(`/resumes/${resume.fileName}`)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={resumeLabels[resume.id]}
                        >
                          <span>{resumeLabels[resume.id]}</span>
                          <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                      ))}
                    </div>
                  </details>

                  {contactLinks
                    .filter((link) => link.label === "Email")
                    .map((link) => {
                      const Icon = actionIconMap[link.label];

                      return (
                        <a
                          key={link.label}
                          className="action-button"
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        >
                          <Icon aria-hidden="true" size={16} />
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                </div>
              </div>

              <aside className="hero-panel" aria-label="Lifecycle ownership overview">
                <div className="hero-panel-header">Ownership map</div>
                <div className="lifecycle-stack">
                  {workflowStages.map((stage) => (
                    <article key={stage.step}>
                      <Network aria-hidden="true" size={17} />
                      <div>
                        <h2>{stage.step}</h2>
                        <p>{stage.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="signal-band reveal" aria-label="Operating system overview">
            <div className="signal-copy">
              <h2>Data products, owned across the full lifecycle.</h2>
              <p>{profile.summary}</p>
            </div>
            <div className="impact-grid" aria-label="Quantified impact">
              {impactMetrics.map((metric) => (
                <article key={metric.label}>
                  <p className="metric-value">{metric.value}</p>
                  <h3>{metric.label}</h3>
                  <p>{metric.context}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="console reveal" aria-labelledby="console-title">
            <div className="console-header">
              <div>
                <h2 id="console-title">Capabilities mapped to product outcomes.</h2>
                <p>
                  The work connects financial intelligence, lifecycle ownership, model-adjacent
                  delivery, and persona-led product curation.
                </p>
              </div>
            </div>

            <div className="console-grid">
              <article className="console-primary">
                <div className="console-detail">
                  <p className="console-tag">{primaryCaseStudy.title}</p>
                  <p>{primaryCaseStudy.summary}</p>
                  <ul>
                    {primaryCaseStudy.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </article>

              <aside className="console-side">
                {capabilityGroups.map((group, index) => {
                  const Icon = capabilityIconMap[index];
                  return (
                    <article key={group.title} className="capability-block">
                      <div className="capability-heading">
                        <Icon aria-hidden="true" size={18} />
                        <p>{group.title}</p>
                      </div>
                      <p>{group.summary}</p>
                      <div className="token-row">
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </aside>
            </div>

            <div className="workflow-strip" aria-label="Data product lifecycle workflow">
              <div className="workflow-heading">
                <p>
                  A delivery spine informed by MobileForge and the B2B marketplace crawler: source
                  acquisition, schema discipline, service reliability, feature readiness, and
                  analytics handoff.
                </p>
              </div>
              <div className="workflow-grid">
                {workflowStages.map((stage) => (
                  <article key={stage.step} className="workflow-step">
                    <h3>{stage.step}</h3>
                    <p>{stage.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section reveal" aria-labelledby="case-studies-title">
            <div className="section-heading">
              <h2 id="case-studies-title">Data Product Experiences</h2>
            </div>

            <article className="case-study-feature">
              <div className="case-study-copy">
                <p className="case-format">{primaryCaseStudy.format}</p>
                <h3>{primaryCaseStudy.title}</h3>
                <p className="case-theme">{primaryCaseStudy.theme}</p>
                <p>{primaryCaseStudy.summary}</p>
                <ul className="case-outcomes">
                  {primaryCaseStudy.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={linkHref(primaryCaseStudy.links[0]?.href)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{primaryCaseStudy.links[0]?.label}</span>
                  <MoveRight aria-hidden="true" size={16} />
                </a>
              </div>
              <div className="case-study-metrics">
                {primaryCaseStudy.metrics.map((metric) => (
                  <div key={metric}>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="reference-grid">
              {referenceCaseStudies.map((study) => (
                <article key={study.title} className="reference-item">
                  {study.image ? (
                    <div className="reference-image-wrap">
                      <img
                        src={assetHref(study.image)}
                        alt={study.title}
                        className="reference-image"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="reference-evidence-panel" aria-label={`${study.title} evidence`}>
                      {study.metrics.map((metric) => (
                        <p key={metric}>{metric}</p>
                      ))}
                    </div>
                  )}
                  <div className="reference-copy">
                    <p className="case-format">{study.format}</p>
                    <h3>{study.title}</h3>
                    <p className="case-theme">{study.theme}</p>
                    <p>{study.summary}</p>
                    <div className="token-row token-row-light">
                      {study.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                    <a
                      className="text-link"
                      href={linkHref(study.links[0]?.href)}
                      target={isExternalHref(study.links[0]?.href) ? "_blank" : undefined}
                      rel={isExternalHref(study.links[0]?.href) ? "noreferrer" : undefined}
                    >
                      <span>{study.links[0]?.label}</span>
                      <MoveRight aria-hidden="true" size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="experience-section reveal" aria-labelledby="experience-title">
            <div className="section-heading section-heading-tight">
              <h2 id="experience-title">Recent roles across data delivery and product clarity.</h2>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <p className="experience-company">{item.company}</p>
                      <h3>{item.role}</h3>
                      {item.product ? <p className="experience-product">{item.product}</p> : null}
                    </div>
                    <div className="experience-meta">
                      <p>{item.dates}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer className="portfolio-footer reveal">
            <div>
              <p className="footer-note">
                Open to product-minded data roles that need lifecycle ownership, financial
                intelligence, and measurable delivery.
              </p>
            </div>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              <BriefcaseBusiness aria-hidden="true" size={18} />
              <span>{profile.email}</span>
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
