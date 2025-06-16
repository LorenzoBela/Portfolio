import fs from 'fs';
import path from 'path';

// Portfolio data (same as in your Laravel controller)
const portfolioData = {
  personalInfo: {
    name: "Lorenzo Miguel D. Bela",
    title: "Computer Engineering Student",
    email: "lorenzo.miguel.bela429@gmail.com",
    phone: "+639656560409",
    location: "Quezon City, Philippines",
    description: "Currently seeking internship opportunities to apply my technical skills and gain practical experience in the field of Computer Engineering."
  },
  
  skills: {
    programming: ["HTML", "CSS", "JavaScript", "PHP", "C", "C++", "Python", "SQL"],
    tools: ["Arduino", "MySQL", "Git", "VS Code", "Vivado"],
    languages: ["Filipino (Native)", "English (Fluent)"]
  },
  
  education: [
    {
      institution: "Adamson University",
      degree: "Bachelor of Science in Computer Engineering",
      period: "2022 - 2026",
      status: "Current"
    },
    {
      institution: "STI College Global City",
      degree: "Science, Technology, Engineering and Mathematics (STEM)",
      period: "2020 - 2022",
      status: "Graduated with High Honors"
    }
  ],
  
  projects: [
    {
      title: "Hash Frames Camera Rental System",
      description: "A comprehensive web application for camera equipment rental management, featuring user authentication, inventory tracking, and booking system.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "CpE Alumni Tracer Database",
      description: "Database management system to track and maintain records of Computer Engineering alumni, facilitating networking and career development.",
      technologies: ["SQL", "Database Design", "PHP"],
      category: "Database Management"
    },
    {
      title: "Hotel Guest Book",
      description: "Digital guest registration and management system for hotels, streamlining check-in/check-out processes and guest information management.",
      technologies: ["PHP", "MySQL", "Web Development"],
      category: "Hospitality Management"
    },
    {
      title: "Anti-Burglary Arduino System",
      description: "IoT security system using Arduino microcontroller with sensors to detect unauthorized entry and trigger alerts.",
      technologies: ["Arduino", "C++", "IoT", "Hardware Programming"],
      category: "IoT & Security"
    },
    {
      title: "Multi-Sensor Automation System",
      description: "Automated system integrating multiple sensors for environmental monitoring and control, demonstrating embedded systems expertise.",
      technologies: ["Arduino", "C++", "Sensor Integration", "Automation"],
      category: "Embedded Systems"
    }
  ]
};

// Create dist directory
const distDir = 'dist';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy public assets to dist
function copyDir(src, dest) {
  if (fs.existsSync(src)) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
}

// Copy all public assets
copyDir('public', distDir);

// Generate base HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{title}} - Lorenzo Miguel D. Bela</title>
    <meta name="description" content="Computer Engineering student at Adamson University seeking internship opportunities. Skilled in multiple programming languages and technologies.">
    <meta name="author" content="Lorenzo Miguel D. Bela">
    <meta name="keywords" content="Computer Engineering, Programming, Arduino, Web Development, Lorenzo Miguel Bela">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{{title}} - Lorenzo Miguel D. Bela">
    <meta property="og:description" content="Computer Engineering student portfolio showcasing projects and skills">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://lorenzo-portfolio.vercel.app">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{title}} - Lorenzo Miguel D. Bela">
    <meta name="twitter:description" content="Computer Engineering student portfolio">
    
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    {{cssLinks}}
</head>
<body class="bg-gray-50">
    <div id="app" data-page="{{pageData}}"></div>
    {{jsLinks}}
</body>
</html>`;

// Read the built manifest to get asset paths
const manifestPath = path.join('public', 'build', 'manifest.json');
let cssLinks = '';
let jsLinks = '';

if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  // Find main app assets
  if (manifest['resources/js/app.js']) {
    const appEntry = manifest['resources/js/app.js'];
    jsLinks = `<script type="module" src="/build/${appEntry.file}"></script>`;
    
    if (appEntry.css) {
      cssLinks = appEntry.css.map(css => `<link rel="stylesheet" href="/build/${css}">`).join('\n    ');
    }
  }
  
  if (manifest['resources/css/app.css']) {
    const cssEntry = manifest['resources/css/app.css'];
    cssLinks += `\n    <link rel="stylesheet" href="/build/${cssEntry.file}">`;
  }
}

// Generate pages
const pages = [
  { 
    name: 'index.html', 
    title: 'Home', 
    component: 'Home', 
    props: { 
      personalInfo: portfolioData.personalInfo, 
      skills: portfolioData.skills, 
      featuredProjects: portfolioData.projects.slice(0, 3) 
    } 
  },
  { 
    name: 'about.html', 
    title: 'About', 
    component: 'About', 
    props: { 
      personalInfo: portfolioData.personalInfo, 
      education: portfolioData.education 
    } 
  },
  { 
    name: 'projects.html', 
    title: 'Projects', 
    component: 'Projects', 
    props: { 
      projects: portfolioData.projects 
    } 
  },
  { 
    name: 'contact.html', 
    title: 'Contact', 
    component: 'Contact', 
    props: { 
      personalInfo: portfolioData.personalInfo 
    } 
  }
];

pages.forEach(page => {
  const pageData = JSON.stringify({
    component: page.component,
    props: page.props,
    url: page.name === 'index.html' ? '/' : `/${page.name.replace('.html', '')}`
  });
  
  const html = htmlTemplate
    .replace(/{{title}}/g, page.title)
    .replace('{{cssLinks}}', cssLinks)
    .replace('{{jsLinks}}', jsLinks)
    .replace('{{pageData}}', pageData.replace(/"/g, '&quot;'));
  
  fs.writeFileSync(path.join(distDir, page.name), html);
});

console.log('Static site generated successfully!');
console.log('Generated files:', pages.map(p => p.name).join(', ')); 