import {
  forbiddenResumeTerms,
  resumeOutputFiles,
  resumePlainText
} from "../scripts/resume-utils";
import { resumePageBackgroundColor } from "../src/resume/ResumeDocument";

describe("resume export helpers", () => {
  it("declares the two downloadable resume PDFs", () => {
    expect(resumeOutputFiles()).toEqual([
      "public/resumes/ashutosh-patel-data-full-stack.pdf",
      "public/resumes/ashutosh-patel-product-data-systems.pdf"
    ]);
  });

  it("keeps plain-text resume exports clean for applicant tracking systems", () => {
    const text = resumePlainText();

    expect(text).toContain("Data Full Stack Ownership");
    expect(text).toContain("Product Data Systems");
    expect(text).toContain("Schema design");
    expect(text).toContain("MongoDB interactions");

    for (const term of forbiddenResumeTerms) {
      expect(text).not.toContain(term);
    }
  });

  it("uses an explicit resume page background for PDF rendering", () => {
    expect(resumePageBackgroundColor).toBe("#ffffff");
  });
});
