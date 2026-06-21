import fs from "node:fs";
import { assertCleanResumeText, resumeOutputFiles, resumePlainText } from "./resume-utils";

const MIN_PDF_BYTES = 7_000;

function main() {
  assertCleanResumeText(resumePlainText());

  for (const file of resumeOutputFiles()) {
    if (!fs.existsSync(file)) {
      throw new Error(`Missing resume PDF: ${file}`);
    }

    const stats = fs.statSync(file);
    if (stats.size < MIN_PDF_BYTES) {
      throw new Error(`Resume PDF is unexpectedly small: ${file} (${stats.size} bytes)`);
    }
  }

  console.log(`Verified ${resumeOutputFiles().length} resume PDFs`);
}

main();
