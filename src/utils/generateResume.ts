import { jsPDF } from "jspdf";

export const generateResume = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  let yPos = 20;

  // Header
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 0, pageWidth, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Professional Resume", pageWidth / 2, 25, { align: "center" });

  yPos = 50;
  doc.setTextColor(0, 0, 0);

  // Personal Information
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Contact Information", margin, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Email: professional@email.com", margin, yPos);
  yPos += 7;
  doc.text("Location: Tasmania, Australia", margin, yPos);
  yPos += 15;

  // Education
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(59, 130, 246);
  doc.text("Education", margin, yPos);
  yPos += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Master of Information Technology and Systems", margin, yPos);
  yPos += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Specialization: Cybersecurity", margin, yPos);
  yPos += 5;
  doc.text("University of Tasmania (UTAS)", margin, yPos);
  yPos += 10;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Bachelor of Science in Computer Science", margin, yPos);
  yPos += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("India", margin, yPos);
  yPos += 15;

  // Skills
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(59, 130, 246);
  doc.text("Technical Skills", margin, yPos);
  yPos += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("UI/UX Design:", margin, yPos);
  doc.setFont("helvetica", "normal");
  doc.text("Figma, User Research, Prototyping, Wireframing, User Flows", margin + 30, yPos);
  yPos += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Development:", margin, yPos);
  doc.setFont("helvetica", "normal");
  doc.text("Flutter, React, Web Design, Mobile App Development", margin + 30, yPos);
  yPos += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Cybersecurity:", margin, yPos);
  doc.setFont("helvetica", "normal");
  doc.text("Security Analysis, Risk Assessment, Network Security", margin + 30, yPos);
  yPos += 15;

  // Key Achievements
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(59, 130, 246);
  doc.text("Key Achievements", margin, yPos);
  yPos += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  
  const achievements = [
    "• Delivered KIT700 project with positive client feedback from ACS Tasmanian Branch Manager",
    "• Specialized in creating intuitive user interfaces through research and testing",
    "• Strong collaborative approach with experience in cross-functional teams",
    "• Comprehensive academic training in cybersecurity and IT systems",
  ];

  achievements.forEach((achievement) => {
    doc.text(achievement, margin, yPos, { maxWidth: pageWidth - 2 * margin });
    yPos += 7;
  });
  yPos += 10;

  // Professional Summary
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(59, 130, 246);
  doc.text("Professional Summary", margin, yPos);
  yPos += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const summary = [
    "Passionate technology professional with Master's degree in IT & Systems (Cybersecurity) from UTAS",
    "and Bachelor's in Computer Science. Expertise in UI/UX design, combining technical knowledge with",
    "creative problem-solving to create intuitive and delightful user experiences. Seeking opportunities",
    "in UI/UX design, business analysis, and IT support roles.",
  ];

  summary.forEach((line) => {
    doc.text(line, margin, yPos, { maxWidth: pageWidth - 2 * margin });
    yPos += 5;
  });

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(128, 128, 128);
  doc.text("Generated from professional portfolio", pageWidth / 2, doc.internal.pageSize.height - 10, { align: "center" });

  // Save the PDF
  doc.save("Professional_Resume.pdf");
};
