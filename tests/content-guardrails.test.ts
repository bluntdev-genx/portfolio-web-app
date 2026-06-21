import {
  caseStudies,
  contactLinks,
  impactMetrics,
  profile,
  resumeVariants,
  technologyGroups
} from "../src/content/profile";
import { readFileSync } from "node:fs";

const forbiddenResumeTerms = [
  "CAREER CONTINUITY",
  "CAREER NOTE",
  "Career continuity",
  "Career break",
  "UPSC",
  "AFCAT",
  "Data Analytics / Data Engineering",
  "Data Analytics + Data Engineering",
  "MongoDB Aggregations",
  "MongoDB aggregation pipelines",
  "MongoDB (Aggregation Pipelines)",
  "Chegg"
];

function flatten(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(flatten).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.values(value).map(flatten).join(" ");
  }

  return String(value ?? "");
}

describe("profile content guardrails", () => {
  it("keeps the public positioning focused on data full-stack product impact", () => {
    expect(profile.name).toBe("Ashutosh Patel");
    expect(profile.title).toContain("Data Full Stack Ownership");
    expect(profile.location).toContain("Gurugram");
    expect(profile.summary).toContain("credit risk");
    expect(profile.summary).toContain("schema design");
    expect(profile.summary).toContain("AI/ML/DS");
  });

  it("exposes the required quantified impact metrics", () => {
    const metricLabels = impactMetrics.map((metric) => metric.label);
    const metricsByLabel = new Map(
      impactMetrics.map((metric) => [metric.label, metric.value])
    );

    expect(metricLabels).toContain("Bank & NBFC clients enabled");
    expect(metricLabels).toContain("Approval lift at flat default rate");
    expect(metricLabels).toContain("Signals evaluated into stable features");
    expect(metricLabels).toContain("SMS processed daily");
    expect(metricsByLabel.get("Bank & NBFC clients enabled")).toBe("6");
    expect(metricsByLabel.get("Approval lift at flat default rate")).toBe("+15%");
    expect(metricsByLabel.get("Signals evaluated into stable features")).toBe("5K -> 800");
    expect(metricsByLabel.get("SMS processed daily")).toBe("10M+");
  });

  it("curates three data product experiences including the two Figma references", () => {
    const titles = caseStudies.map((study) => study.title);
    const urls = flatten(caseStudies);

    expect(titles).toContain("MobileForge Lending Intelligence");
    expect(titles).toContain("B2B Marketplace Crawler");
    expect(titles).toContain("Wealth Management Experience");
    expect(titles).toContain("Infrastructure Self Serve Experience");
    expect(urls).toContain("1,329 IndiaMART products");
    expect(urls).toContain("821 suppliers");
    expect(urls).toContain("120 cities");
    expect(urls).toContain("/case-studies/b2b-marketplace-crawler-evidence.json");
    expect(urls).toContain("https://static-base-27037824.figma.site");
    expect(urls).toContain("https://drag-bats-99244166.figma.site");
  });

  it("normalizes MongoDB wording and removes career-continuity content from resumes", () => {
    const resumeText = flatten(resumeVariants);

    expect(resumeText).toContain("MongoDB interactions");
    expect(resumeText).toContain("B2B marketplace crawler");
    expect(resumeText).toContain("1,329 product records");
    for (const term of forbiddenResumeTerms) {
      expect(resumeText).not.toContain(term);
    }
  });

  it("keeps catered resume downloads under one unified data full-stack frame", () => {
    expect(resumeVariants.map((variant) => variant.id)).toEqual([
      "data-full-stack",
      "product-data-systems"
    ]);
    expect(resumeVariants[0].headline).toContain("Data Full Stack Ownership");
    expect(resumeVariants[1].headline).toContain("Product Data Systems");
  });

  it("keeps contact and stack content ready for the portfolio UI", () => {
    expect(contactLinks.map((link) => link.label)).toEqual([
      "Email",
      "LinkedIn",
      "GitHub"
    ]);
    expect(technologyGroups.some((group) => group.items.includes("FastAPI"))).toBe(true);
    expect(technologyGroups.some((group) => group.items.includes("MongoDB interactions"))).toBe(true);
  });

  it("publishes with the configured custom domain", () => {
    expect(readFileSync("public/CNAME", "utf8").trim()).toBe("hey-raymond.genxlabs.tech");
  });
});
