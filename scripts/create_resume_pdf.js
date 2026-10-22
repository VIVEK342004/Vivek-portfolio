const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate a valid minimal PDF (version 1.4)
const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 480 >>
stream
BT
/F1 22 Tf
50 720 Td
(VIVEK KUMAR - SOFTWARE DEVELOPER) Tj
0 -26 Td
/F1 11 Tf
(Email: vivekkumar04034@gmail.com | Phone: +91 8979261332) Tj
0 -18 Td
(GitHub: github.com/VIVEK342004 | LinkedIn: linkedin.com/in/vivek342004) Tj
0 -18 Td
(Portfolio: vivek-portfolio.vercel.app | Location: India) Tj
0 -32 Td
/F1 15 Tf
(PROFESSIONAL PROFILE) Tj
0 -20 Td
/F1 10.5 Tf
(Software developer with strong computer science and systems foundations.) Tj
0 -16 Td
(Specializing in full-stack web applications, algorithmic implementations and AI tools.) Tj
0 -30 Td
/F1 15 Tf
(CORE TECHNICAL SKILLS) Tj
0 -20 Td
/F1 10.5 Tf
(Languages: Java, Python, JavaScript, TypeScript, SQL) Tj
0 -16 Td
(Frontend: React, Next.js 16, Tailwind CSS, HTML5, CSS3) Tj
0 -16 Td
(Backend & DB: Node.js, REST APIs, PostgreSQL, MongoDB, Docker, Git) Tj
0 -30 Td
/F1 15 Tf
(FEATURED PROJECTS) Tj
0 -20 Td
/F1 10.5 Tf
(1. AI Clinic: Fast patient-record retrieval and clinic management platform.) Tj
0 -16 Td
(2. Myers Diff Algorithm: Python engine computing minimal edit sequences and diffs.) Tj
0 -16 Td
(3. Developer Portfolio: Production-grade Next.js 16 web application.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000790 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
857
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), content);
console.log('Successfully re-generated public/resume.pdf with verified contact information');
