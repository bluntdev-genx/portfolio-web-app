import fs from "node:fs/promises";
import path from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import React from "react";
import { resumeVariants } from "../src/content/profile";
import { ResumeDocument } from "../src/resume/ResumeDocument";
import { assertCleanResumeText, resumeDirectory } from "./resume-utils";

async function main() {
  assertCleanResumeText();
  await fs.mkdir(resumeDirectory, { recursive: true });

  for (const variant of resumeVariants) {
    const outputPath = path.join(resumeDirectory, variant.fileName);
    await renderToFile(React.createElement(ResumeDocument, { variant }) as any, outputPath);
    console.log(`Wrote ${outputPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
