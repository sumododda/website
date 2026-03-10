const siteData = {
  //   Header Details
  name: "Sumo",
  headerTagline: ["Product Security,", "AI & Automation,", "Zero Trust."],
  headerParagraph: "Building secure, scalable, and AI-driven platforms.",
  contactEmail: "doddasumo@gmail.com",

  // Work Section
  projects: [
    {
      title: "MCP Review - Security Scanner",
      para: "Built a comprehensive security scanner for MCP servers detecting vulnerabilities across 7 attack surfaces including tool poisoning and prompt injection.",
      imageSrc:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      url: "https://github.com/sumododda",
    },
    {
      title: "Zero Trust Implementation",
      para: "Designed and implemented Zero Trust architecture on Active Directory, enforcing JIT access and least privilege controls.",
      imageSrc:
        "https://images.unsplash.com/photo-1614064641936-a5926e0e8568?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      url: "https://github.com/sumododda",
    },
    {
      title: "Unified Reconnaissance Tool",
      para: "Engineered an automated reconnaissance tool integrating open-source scanners for comprehensive vulnerability assessment.",
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      url: "https://github.com/sumododda",
    },
  ],

  // Experience Section
  experience: [
    {
      title: "Engineer II, Product Security",
      company: "GEICO",
      date: "July 2024 - Present",
      bullets: [
        "Architected and developed ThreatAI, an AI-powered automated threat modeling platform using LangGraph, Milvus significantly accelerating the threat modeling process across product teams",
        "Led secure software development lifecycle (SSDLC) initiatives, conducting security design reviews and providing guidance to development teams on secure coding practices",
        "Drove software supply chain security programs, identifying and mitigating risks across third-party dependencies and build pipelines",
        "Developed AI-driven security tooling to automate vulnerability detection and risk identification throughout the development lifecycle",
        "Conducted threat modeling assessments for multiple Tier 2 applications, identifying security risks and developing remediation guidance prior to production release",
        "Mentored engineering teams on security best practices, threat modeling methodologies, and OWASP Top 10 mitigations"
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of North Carolina, Charlotte",
      date: "December 2022 - December 2023",
      bullets: [
        "Developed and delivered instructional materials for Secure Programming and Penetration Testing courses to 75 graduate students",
        "Facilitated hands-on learning of OWASP Top 10 vulnerabilities, security design patterns, and secure coding practices",
        "Contributed lasting curriculum improvements including reference materials adopted permanently by the department, achieving a 95% class average"
      ]
    },
    {
      title: "SOC Analyst Intern",
      company: "Idea Dunes Pvt Ltd.",
      date: "December 2021 - June 2022",
      bullets: [
        "Monitored critical infrastructure using Splunk, proactively detecting and triaging potential security incidents across enterprise environments",
        "Built real-time security dashboards consolidating data from 1,000+ critical devices, enabling faster incident identification and response",
        "Collaborated on network firewall management and led Splunk cloud upgrade initiatives, ensuring platform stability and app compatibility"
      ]
    }
  ],

  // About Section
  aboutParaOne:
    "Security Engineer with 2+ years of product security experience specializing in AI-driven threat modeling, secure software development lifecycle (SSDLC), and software supply chain security.",
  aboutParaTwo:
    "Built enterprise-grade automated threat modeling platforms and security scanning tools leveraging LLM architectures. Proven ability to identify root causes of security issues, develop scalable guidance, and mentor teams on secure development practices.",
  aboutParaThree:
    "Holds MS in Cybersecurity and 6 industry certifications including OSCP, CompTIA Security+, CCNA, and RHCSA.",
  aboutImage:
    "https://images.unsplash.com/photo-1650733790397-c986514bfb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=81",

  // Skills Section
  skills: [
    {
      img: "/images/amazonaws.svg",
      para: "Cloud & Infrastructure: AWS, Azure, Azure Sentinel, Splunk, Active Directory/LDAP, Network Security (TCP/IP, DNS, TLS/SSL, VPN, Firewalls)",
    },
    {
      img: "/images/linux.svg",
      para: "AI & Automation: LangGraph, LLM-as-Judge Evaluation, Automated Security Scanning, AI-Driven Risk Identification, Prompt Injection Detection",
    },
    {
      img: "/images/docker.svg",
      para: "Programming & Tools: Python, Bash, Golang, PowerShell, SQL, FastAPI, Celery, Docker, Kubernetes, PostgreSQL, Redis, SvelteKit",
    },
    {
      img: "/images/gnubash.svg",
      para: "Security Engineering: Threat Modeling, SSDLC, Software Supply Chain Security, Incident Investigation, Root Cause Analysis, Vulnerability Assessment",
    },
    {
      img: "/images/kubernetes.svg",
      para: "Certifications: OSCP, CompTIA Security+, CCNA, RHCSA, AWS Solutions Architect - Associate, AWS Certified Cloud Practitioner, eJPT",
    },
    {
      img: "/images/apache.svg",
      para: "Education: MS in Cybersecurity (UNC Charlotte), BS in Computer Science (Information Security - Vellore Institute of Technology)",
    },
  ],

  // Promotion Section
  promotionHeading: "Matters !!.",
  promotionPara:
    "You will have massive doubt. One day you will feel strongly about something, then the next day you will wonder if your work and your dream really even matters. It does. But, you have to remind yourself of that all the time. Your work is real. If you stop, if you quit…something is lost forever. Your work makes a difference. Keep going.",

  // Contact Section
  contactSubHeading: "Let's create your next experience together",
  social: [
    { img: "/images/github.svg", url: "https://github.com/sumo2001" },
    {
      img: "/images/linkedin.svg",
      url: "https://www.linkedin.com/in/sumanth-dodda/",
    },
    {
      img: "/images/tryhackme.svg",
      url: "https://tryhackme.com/p/AlLMight",
    },
    {
      img: "/images/medium.svg",
      url: "https://sumododda.medium.com/",
    },
    {
      img: "/images/researchgate.svg",
      url: "https://www.researchgate.net/profile/Sumanth-Dodda",
    },
    {
      img: "/images/instagram.svg",
      url: "https://www.instagram.com/iamcybermight",
    },
  ],
};

export default siteData;
