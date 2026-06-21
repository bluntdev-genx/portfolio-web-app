import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  DatabaseZap,
  Github,
  Linkedin,
  Mail,
  MoveRight,
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
  resumeVariants,
  technologyGroups
} from "./content/profile";

const actionIconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
} as const;

const resumeHrefById = {
  "data-analytics": "/portfolio-web-app/resumes/ashutosh-patel-data-analytics.pdf",
  "data-engineering": "/portfolio-web-app/resumes/ashutosh-patel-data-engineering.pdf"
} as const;

const capabilityIconMap = [ChartColumnIncreasing, ShieldCheck, DatabaseZap];

const workflowStages = [
  {
    step: "Capture",
    detail: "Scrapy collection across category-specific sources with controlled concurrency, retry logic, and throttled request handling."
  },
  {
    step: "Normalize",
    detail: "Structured item schemas, whitespace cleanup, price normalization, absolute URL handling, and missing-value defaults."
  },
  {
    step: "Partition",
    detail: "Category-scoped outputs for Industrial Machinery, Electrical Components, Raw Materials, and Packaging."
  },
  {
    step: "Analyze",
    detail: "Combined datasets ready for EDA, pricing analysis, supplier geography, and data quality review."
  }
] as const;

function App() {
  const primaryCaseStudy = caseStudies[0];
  const referenceCaseStudies = caseStudies.slice(1);
  const showWorkflowSlot = caseStudies.length < 4;

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
                <div className="hero-rule" aria-hidden="true" />
                <p className="hero-kicker">Data Analytics / Data Engineering</p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero-subtitle">Analytics Engineering, decision systems, and data product delivery.</p>
                <p className="hero-summary">{profile.summary}</p>

                <div className="hero-actions" aria-label="Resume and portfolio actions">
                  {resumeVariants.map((resume) => (
                    <a
                      key={resume.id}
                      className="action-button action-button-primary"
                      aria-label={
                        resume.id === "data-analytics"
                          ? "Data Analytics resume"
                          : "Data Engineering resume"
                      }
                      href={resumeHrefById[resume.id]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        {resume.id === "data-analytics" ? "Analytics resume PDF" : "Engineering resume PDF"}
                      </span>
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  ))}

                  {contactLinks.map((link) => {
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

              <aside className="hero-panel" aria-label="Impact highlights">
                <div className="hero-panel-header">
                  <span>Impact ledger</span>
                  <span>{profile.location}</span>
                </div>
                <ul className="hero-metrics">
                  {impactMetrics.map((metric) => (
                    <li key={metric.label}>
                      <p className="metric-value">{metric.value}</p>
                      <p className="metric-label">{metric.label}</p>
                      <p className="metric-context">{metric.context}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section className="signal-band reveal" aria-label="Operating system overview">
            <div className="signal-copy">
              <p className="section-label">Operating perspective</p>
              <h2>Analytics systems framed as decision products.</h2>
              <p>
                The portfolio centers on lender-facing analytics, feature governance, and
                product-ready reporting that connects operational reliability to business
                outcomes.
              </p>
            </div>
            <div className="signal-technologies">
              {technologyGroups.map((group) => (
                <div key={group.label} className="technology-row">
                  <p>{group.label}</p>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="console reveal" aria-labelledby="console-title">
            <div className="console-header">
              <div>
                <p className="section-label section-label-dark">Command center layer</p>
                <h2 id="console-title">Underwriting analytics, surfaced like a live operating console.</h2>
              </div>
              <div className="console-status">
                <span className="status-dot" aria-hidden="true" />
                <span>Production scale / monitored / lender-facing</span>
              </div>
            </div>

            <div className="console-grid">
              <article className="console-primary">
                <div className="console-terminal">
                  <div className="console-terminal-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="console-lines" aria-label="Workflow narrative">
                    {primaryCaseStudy.metrics.map((metric, index) => (
                      <p key={metric}>
                        <span>0{index + 1}</span>
                        <strong>{metric}</strong>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="console-detail">
                  <p className="console-tag">{primaryCaseStudy.format}</p>
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

            <div className="workflow-strip" aria-label="Data engineering workflow">
              <div className="workflow-heading">
                <p className="section-label section-label-dark">Data engineering workflow</p>
                <p>
                  A delivery spine informed by the local B2B marketplace crawler project: source
                  acquisition, cleaning, partitioned output, and analysis-ready handoff.
                </p>
              </div>
              <div className="workflow-grid">
                {workflowStages.map((stage, index) => (
                  <article key={stage.step} className="workflow-step">
                    <p className="workflow-index">0{index + 1}</p>
                    <h3>{stage.step}</h3>
                    <p>{stage.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section reveal" aria-labelledby="case-studies-title">
            <div className="section-heading">
              <p className="section-label">Selected case studies</p>
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
                  href={primaryCaseStudy.links[0]?.href}
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
                        src={`/portfolio-web-app${study.image}`}
                        alt={study.title}
                        className="reference-image"
                      />
                    </div>
                  ) : (
                    <div className="reference-evidence-panel" aria-label={`${study.title} evidence`}>
                      {study.metrics.map((metric, index) => (
                        <p key={metric}>
                          <span>0{index + 1}</span>
                          {metric}
                        </p>
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
                      href={study.links[0]?.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{study.links[0]?.label}</span>
                      <MoveRight aria-hidden="true" size={16} />
                    </a>
                  </div>
                </article>
              ))}
              {showWorkflowSlot ? (
                <article
                  className="reference-item reference-item-placeholder"
                  aria-label="Future workflow project slot"
                >
                  <div className="reference-copy">
                    <p className="case-format">Content-driven slot</p>
                    <h3>Data Engineering Workflow</h3>
                    <p className="case-theme">Reserved layout for future source-backed project content.</p>
                    <p>
                      The app already supports another portfolio entry in this rail. When shared
                      content adds a workflow or engineering case study, this section can absorb it
                      without a layout change.
                    </p>
                  </div>
                </article>
              ) : null}
            </div>
          </section>

          <section className="experience-section reveal" aria-labelledby="experience-title">
            <div className="section-heading section-heading-tight">
              <p className="section-label">Recent experience</p>
              <h2 id="experience-title">Roles that connect data delivery, product clarity, and measurable lift.</h2>
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
              <p className="section-label">Open to conversation</p>
              <p className="footer-note">
                Analytics engineering and data engineering roles with product accountability.
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
