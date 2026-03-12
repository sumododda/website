const siteData = {
  // Header
  name: "Sumanth Dodda",
  role: "Security Engineer",
  tagline: "Building secure, scalable, and AI-driven platforms.",
  contactEmail: "doddasumo@gmail.com",

  // Projects (from GitHub)
  projects: [
    {
      name: "mcp-scanner",
      description:
        "Security scanner for Model Context Protocol (MCP) servers. 3-tier detection pipeline with pattern matching, capability analysis, and LLM-powered semantic analysis.",
      language: "Python",
      stars: 0,
      url: "https://github.com/sumododda/mcp-scanner",
    },
    {
      name: "Trishul",
      description: "The Ultimate Recon Framework",
      language: "Shell",
      stars: 11,
      url: "https://github.com/sumododda/Trishul",
    },
    {
      name: "skills-as-mcp",
      description: "MCP server for dynamic AI agent skill management",
      language: "Python",
      stars: 0,
      url: "https://github.com/sumododda/skills-as-mcp",
    },
    {
      name: "Prep-Notes",
      description:
        "This is my personal notes for every shit i learn, feel free to use it :)",
      language: "Go",
      stars: 2,
      url: "https://github.com/sumododda/Prep-Notes",
    },
  ],

  // Experience
  experience: [
    {
      title: "Engineer II, Product Security",
      company: "GEICO",
      date: "July 2024 - Present",
      bullets: [
        "Architected ThreatAI, an AI-powered threat modeling platform using LangGraph and Milvus, accelerating threat modeling across product teams",
        "Led SSDLC initiatives — security design reviews and secure coding guidance for development teams",
        "Drove software supply chain security, identifying risks across third-party dependencies and build pipelines",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "UNC Charlotte",
      date: "Dec 2022 - Dec 2023",
      bullets: [
        "Developed instructional materials for Secure Programming and Penetration Testing courses for 75 graduate students",
        "Contributed curriculum improvements adopted permanently by the department, achieving a 95% class average",
      ],
    },
    {
      title: "SOC Analyst Intern",
      company: "Idea Dunes Pvt Ltd.",
      date: "Dec 2021 - Jun 2022",
      bullets: [
        "Monitored critical infrastructure using Splunk, detecting and triaging security incidents across enterprise environments",
        "Built real-time security dashboards consolidating data from 1,000+ critical devices",
      ],
    },
  ],

  // Skills
  skills: [
    {
      title: "Security Engineering",
      items:
        "Threat Modeling, SSDLC, Supply Chain Security, Vulnerability Assessment",
      icon: "Shield",
    },
    {
      title: "AI & Automation",
      items:
        "LangGraph, LLM Evaluation, Automated Scanning, Prompt Injection Detection",
      icon: "BrainCircuit",
    },
    {
      title: "Cloud & Infrastructure",
      items: "AWS, Azure, Splunk, Active Directory, Docker, Kubernetes",
      icon: "Server",
    },
    {
      title: "Programming",
      items: "Python, Bash, Golang, SQL, FastAPI, SvelteKit, PostgreSQL, Redis",
      icon: "Terminal",
    },
  ],

  // Certifications
  certifications: [
    "CompTIA Security+",
    "CCNA",
    "RHCSA",
    "AWS Solutions Architect",
    "AWS Cloud Practitioner",
    "eJPT",
  ],

  // Education
  education: [
    {
      degree: "MS Cybersecurity",
      school: "University of North Carolina, Charlotte",
      years: "2022 - 2023",
      gpa: "3.8 / 4.0",
    },
    {
      degree: "BS Computer Science, Information Security",
      school: "Vellore Institute of Technology",
      years: "2018 - 2022",
      gpa: "8.5 / 10",
    },
  ],

  // Social
  social: [
    {
      name: "GitHub",
      url: "https://github.com/sumododda",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sumanth-dodda/",
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/AlLMight",
    },
    {
      name: "Medium",
      url: "https://sumododda.medium.com/",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Sumanth-Dodda",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iamcybermight",
    },
  ],
};

export default siteData;
