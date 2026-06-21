import path from "node:path";
import {
  capabilityGroups,
  certification,
  education,
  experience,
  profile,
  resumeVariants
} from "../src/content/profile";

export const forbiddenResumeTerms = [
  "CAREER CONTINUITY",
  "CAREER NOTE",
  "Career continuity",
  "Career break",
  "career break",
  "exam prep",
  "exam preparation",
  "defence examination",
  "defence-examination",
  "UPSC",
  "AFCAT",
  "Data Analytics / Data Engineering",
  "Data Analytics + Data Engineering",
  "MongoDB Aggregations",
  "MongoDB aggregation pipelines",
  "MongoDB (Aggregation Pipelines)",
  "Chegg"
];

export const resumeDirectory = path.join("public", "resumes");

export function resumeOutputFiles(): string[] {
  return resumeVariants.map((variant) =>
    path.join(resumeDirectory, variant.fileName).split(path.sep).join("/")
  );
}

export function resumePlainText(): string {
  const shared = [
    profile.name,
    profile.title,
    profile.email,
    profile.phone,
    profile.linkedin,
    profile.github,
    profile.location,
    profile.summary,
    ...capabilityGroups.flatMap((group) => [
      group.title,
      group.summary,
      ...group.items
    ]),
    ...experience.flatMap((item) => [
      item.company,
      item.product ?? "",
      item.role,
      item.dates,
      item.location,
      ...item.bullets
    ]),
    education.degree,
    education.institution,
    education.dates,
    certification.name,
    certification.issuer,
    certification.focus
  ];

  const variants = resumeVariants.flatMap((variant) => [
    variant.headline,
    variant.summary,
    variant.technologyLine,
    ...variant.focusAreas,
    ...variant.capabilityTitles,
    ...variant.experienceHighlights
  ]);

  return [...shared, ...variants].join("\n");
}

export function assertCleanResumeText(text = resumePlainText()): void {
  const offenders = forbiddenResumeTerms.filter((term) => text.includes(term));

  if (offenders.length > 0) {
    throw new Error(`Forbidden resume terms found: ${offenders.join(", ")}`);
  }
}
