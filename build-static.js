import fs from 'fs';
import path from 'path';

// Portfolio data (matching Laravel controller structure)
const portfolioData = {
  personalInfo: {
    name: 'Lorenzo Miguel D. Bela',
    title: 'Computer Engineering Student',
    email: 'lorenzo.miguel.bela429@adamson.edu.ph',
    phone: '+639666504091',
    location: '149-B Ilocos Sur, 1105, Quezon City',
    objective: 'Computer Engineering student seeking internship opportunities to apply technical skills in software development, hardware integration and system design while gaining valuable industry experience. Eager to contribute to innovative projects and learn from experienced professionals in a collaborative environment.',
    linkedin: null,
    github: null,
    portfolio: null,
  },
  
  skills: {
    languages: [
      'HTML', 'CSS', 'JavaScript', 'PHP', 'C', 'C++', 'Python', 'SQL', 'Laravel', 'Vue.js', 'Tailwind CSS', 'Bootstrap'
    ],
    tools_frameworks: [
      'Arduino', 'MySQL', 'Git', 'Visual Studio Code', 'Vivado', 'Inertia.js', 'Vite', 'Node.js', 'Composer'
    ],
    technologies: [
      'Web Development', 'PCB Design', 'Circuit Prototyping', 'Database Management', 'Full-Stack Development', 'SPA Development'
    ],
    soft_skills: [
      'Collaboration', 'Problem-Solving', 'Time Management', 'Attention to Detail', 'Project Management', 'Technical Documentation'
    ]
  },
  
  education: [
    {
      institution: 'Adamson University',
      degree: 'Bachelor of Science in Computer Engineering',
      period: '2022-2026',
      status: 'Current',
      coursework: [
        'Web Design and Development',
        'Software Design',
        'Computer Network and Security',
        'Microprocessor Systems',
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Logic Circuit and Design',
        'Data and Digital Communications',
        'Feedback and Control Systems',
        'Database Design and Development'
      ]
    },
    {
      institution: 'Adamson University',
      degree: 'STEM major in Technology',
      period: '2020-2022',
      status: 'Completed',
      honors: 'High Honors'
    }
  ],
  
  projects: [
    {
      title: 'Modern Portfolio Website',
      subtitle: 'Personal Portfolio with Modern UI/UX',
      date: 'June 2025',
      type: 'Full-Stack Development',
      description: 'Built a modern, responsive portfolio website using Laravel 12, Vue.js 3, and Tailwind CSS with Apple-style animations and smooth scrolling effects.',
      features: [
        'Modern SPA architecture with Inertia.js',
        'Responsive design with Tailwind CSS',
        'Apple-style animations and smooth scrolling',
        'Interactive contact form with validation',
        'Project showcase with filtering capabilities'
      ],
      technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'Inertia.js', 'Vite', 'JavaScript', 'PHP'],
      github: null,
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Hash Frames Camera Rental System',
      subtitle: 'Web-Based Full Stack System (PHP, MySQL, HTML)',
      date: 'May 2025',
      type: 'Web Development',
      description: 'Developed a reservation and inventory system with user authentication and role-based access for a camera rental business.',
      features: [
        'User authentication and role-based access control',
        'Integrated image upload and payment methods',
        'Reporting features, system settings, and chatbot support'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: null,
      demo: 'hashframes.store',
      status: 'Completed'
    },
    {
      title: 'CpE Alumni Tracer Database System',
      subtitle: 'Database System',
      date: 'December 2024',
      type: 'Database Development',
      description: 'Developed a Database-driven digital guestbook using PHP and MySQL that captures detailed alumni visit logs, feedback, and graduate profiles.',
      features: [
        'Automated report generation for alumni tracking',
        'Improved alumni engagement and record-keeping efficiency'
      ],
      technologies: ['PHP', 'MySQL', 'Database Design'],
      github: null,
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Computerized Hotel Guest Book',
      subtitle: '',
      date: 'May 2024',
      type: 'Web Development',
      description: 'Developed a Web-based guest management system using PHP and MySQL for managing hotel check-ins, visitor information, and room assignments.',
      features: [
        'Streamlined hotel front-desk operations',
        'Facilitated efficient data retrieval and guest management'
      ],
      technologies: ['PHP', 'MySQL', 'Web Development'],
      github: null,
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Anti-Burglary System (Arduino) Security and Automation Project',
      subtitle: '',
      date: 'May 2024',
      type: 'Hardware/Software Integration',
      description: 'Developed an Arduino microcontroller-based security system featuring ultrasonic proximity detection, buzzer alarms upon intrusion.',
      features: [
        'Motion detection with ultrasonic sensors',
        'Triggered alarms and buzzer alerts',
        'Designed custom PCB and fabricated an enclosure for practical project integrating hardware, sensors, and real-time alerts'
      ],
      technologies: ['Arduino', 'Sensors', 'PCB Design', 'Circuit Prototyping'],
      github: null,
      demo: null,
      status: 'Completed'
    },
    {
      title: 'Multi-Sensor Automation System (Arduino)',
      subtitle: '',
      date: 'December 2024',
      type: 'Hardware Development',
      description: 'Led team of 5 students through complete development cycle from breadboard prototype to custom PCB fabrication, integrating motion detection, water level monitoring, and proximity sensing systems.',
      features: [
        'Achieved detection ranges and response times using Arduino Uno R3, PIR sensors, ultrasonic sensors, and 741 op-amp for automated security and environmental monitoring applications'
      ],
      technologies: ['Arduino Uno R3', 'PIR sensors', 'Ultrasonic sensors', 'PCB Design'],
      github: null,
      demo: null,
      status: 'Completed'
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
      education: portfolioData.education,
      projects: portfolioData.projects
    } 
  },
  { 
    name: 'about.html', 
    title: 'About', 
    component: 'About', 
    props: { 
      personalInfo: portfolioData.personalInfo, 
      education: portfolioData.education,
      skills: portfolioData.skills
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