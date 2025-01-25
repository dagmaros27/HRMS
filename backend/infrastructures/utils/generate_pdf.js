const marked = require("marked");
const puppeteer = require("puppeteer");
const fs = require("fs");

const convertMarkdownToPDF = async (markdownContent) => {
  try {
    const htmlContent = marked.parse(markdownContent);

    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({
      format: "A4", // Paper size
      printBackground: true, // Ensure background images/styles are included
    });

    await browser.close();

    fs.writeFileSync("debug.pdf", pdfBuffer);
    console.log("PDF saved locally for debugging");

    return pdfBuffer;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};

module.exports = { convertMarkdownToPDF };
