import React from "react";
import axios from "axios";

const DownloadPDFButton = ({ contentId }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(`/download-pdf/${contentId}`, {
        responseType: "blob", // Ensure response is in binary format
      });

      // Create a download link and trigger the download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(response.data);
      link.download = "content.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading PDF", error);
    }
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownloadPDFButton;
