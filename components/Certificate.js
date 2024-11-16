import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css';

const Certificate = () => {
  const downloadCertificate = () => {
    const input = document.getElementById('certificate');
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Adjust width if needed
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('certificate.pdf'); // Save the PDF with a specific name
    });
  };

  return (
    <div className="certificate-container">
      <div className="certificate" id="certificate">
        <h2></h2>
        <br />
        {/* University Header */}
        <div className="certificate-header">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.hXr0Ky7pENLHKdgB480C0gHaC_&pid=Api&P=0&h=180"
            alt="University Logo"
            className="university-logo"
            crossOrigin="anonymous" // Added crossOrigin attribute
          />
          <div className="university-text">
            <h2>KL Deamed to be University</h2>
            <p className="tagline">Driven to Discover</p>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="certificate-body">
          <p className="date">July 24, 2023</p>
          <h1 className="recipient-name">Shaik.Rabbannie</h1>
          <p className="completion-text">has successfully completed with distinction</p>
          <h2 className="course-title">Java Full Stack web Development</h2>
          <p className="course-description">
            a 9-week online non-credit course authorized by KL Deamed to be University and offered through Courseds
          </p>
        </div>

        {/* Badge and Signature Section */}
        <div className="right-section">
          <div className="verified-badge">
            <p>VERIFIED CERTIFICATE</p>
            <p className="distinction">WITH DISTINCTION</p>
            <div className="coursera-seal">
              <p>EDUCATION FOR EVERYONE</p>
              <h4>Coursera</h4>
            </div>
          </div>
          <div className="signature-section">
            <p className="signature">Professor Christopher J. Cramer, Ph.D.</p>
            <p className="position">Department of Chemistry</p>
            <p>KL University </p>
          </div>
        </div>

        {/* Verification Link */}
        <p className="verification-link">
          Verify at Courseds.org/verify/Q2WE9MWD43
        </p>
        <p className="footer-note">
          Coursera has confirmed the identity of this individual and their participation in the course.
        </p>
      </div>

      <br />
      {/* Download Button */}
      <button onClick={downloadCertificate} className="download-button" position="middle">
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
