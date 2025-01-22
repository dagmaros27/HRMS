const marked = require("marked");
const puppeteer = require("puppeteer");
const fs = require("fs");

const convertMarkdownToPDF = async (markdownContent) => {
  try {
    const htmlContent = marked(markdownContent);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({
      format: "A4", // Paper size
      printBackground: true, // Ensure background images/styles are included
    });

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};

module.exports = { convertMarkdownToPDF };
