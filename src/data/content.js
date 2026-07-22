// Everything on the site is written here.
// Edit this one file to update the portfolio. No other file needs to change.

export const profile = {
  name: "Muhammad Hannan Haris",
  role: "Cloud & AI Automation Engineer",
  tagline: "AWS Certified Solutions Architect",
  location: "Faisalabad, Pakistan",
  availability: "Open to new work, on site or remote",
  intro:
    "I design, deploy and run production cloud infrastructure on AWS, Azure and GCP, and I build the automation that sits on top of it. Terraform pipelines, Kubernetes clusters, disaster recovery, and AI workflows that handle real business processes end to end.",
  email: "hannanharis001@gmail.com",
  phone: "+92 312 7621382",
  linkedin: "https://www.linkedin.com/in/hannan-haris-221a26208",
  linkedinLabel: "/in/hannan-haris-221a26208",
  github: "", // add your GitHub URL here and the link appears automatically
  resumeFile: "/Hannan_Haris_Resume.pdf",
  avatar: "/avatar.png", // drop your picture or cartoon avatar in the public folder
};

export const metrics = [
  { value: 25, prefix: "-", suffix: "%", label: "AWS operational cost", note: "reserved and spot instances, autoscaling, right sizing" },
  { value: 99.9, suffix: "%", label: "uptime SLA held", note: "CloudWatch and CloudTrail alarm coverage", decimals: 1 },
  { value: 5, suffix: " TB+", label: "MySQL migrated to RDS", note: "zero data loss, 2 hour cutover" },
  { value: 70, prefix: "-", suffix: "%", label: "incident response time", note: "Lambda based automated remediation" },
];

export const experience = [
  {
    company: "Puffersoft (Pvt) Ltd",
    role: "Cloud & AI Automation Engineer",
    place: "Faisalabad, Pakistan",
    period: "March 2024 - Present",
    current: true,
    points: [
      "Cut AWS operational cost by 25% using reserved and spot instances, autoscaling policies and resource right sizing across EC2, RDS and S3.",
      "Built the monitoring layer in CloudWatch and CloudTrail with dynamic alarms that fix problems on their own. An instance nearing its IOPS or throughput limit triggers a Lambda that raises both before the workload degrades, and emails the team through SNS. This is a large part of how the 99.9% uptime SLA held.",
      "Converted all monitoring, networking and compute configuration to Terraform so any environment can be rebuilt the same way every time.",
      "Deployed a production Kubernetes cluster on AWS EKS with the Load Balancer Controller, autoscaling and high availability for containerized services.",
      "Set up backup and disaster recovery with AWS DRS, reaching a 15 minute RPO and 1 hour RTO on critical systems.",
      "Led the migration of 5TB+ on premises MySQL databases to AWS RDS with zero data loss, 2 hours of downtime and 40% faster queries.",
      "Designed OpenVPN infrastructure with MFA for encrypted remote access for 50+ team members.",
      "Moved every hardcoded credential into AWS Secrets Manager to meet SOC 2 and ISO 27001 requirements.",
      "Added Azure Application Gateway with WAF against OWASP Top 10 threats, and automated Azure VM provisioning with ARM templates and Azure DevOps to cut deployment time by 40%.",
      "Shipped client facing n8n automation: CV shortlisting, multi tier document approval, an employee request portal, social content publishing, invoice conversion and a RAG support chatbot.",
      "Mentored 3 junior cloud engineers on AWS practice, Terraform and troubleshooting.",
    ],
  },
  {
    company: "Puffersoft (Pvt) Ltd",
    role: "Cloud Engineering Intern",
    place: "Faisalabad, Pakistan",
    period: "January 2024 - March 2024",
    points: [
      "Completed intensive AWS training on core services, architecture patterns and operational practice.",
      "Helped migrate legacy applications to EC2, S3, RDS and VPC, and automated the setup with Terraform and Ansible.",
    ],
  },
  {
    company: "Raja Abdullah E-commerce Stores",
    role: "Technical Consultant & Virtual Assistant",
    place: "United Kingdom, remote",
    period: "July 2023 - January 2025",
    points: [
      "Advised on cloud hosting and managed Amazon and Shopify listings with SEO work that lifted organic traffic by 30%.",
      "Automated repeat admin tasks with Python scripts to cut manual workload.",
    ],
  },
];

export const projects = [
  {
    name: "DocSign",
    kicker: "Document approval, automated",
    stack: ["n8n", "Qwen", "Milvus", "PostgreSQL"],
    summary:
      "A full document lifecycle system: a submission comes in, an LLM checks it against company policy, then it routes through HR, Finance and Exec sign off with webhook driven decision handlers.",
    detail:
      "Policy files are uploaded as PDF or DOCX through a web form, chunked at 800 characters with 150 character overlap, embedded and stored in Milvus with metadata. Arabic policy checking runs on Qwen. Each stage emails the right person and logs rejections to Sheets.",
    tag: "AI automation",
  },
  {
    name: "RAG Support Chatbot",
    kicker: "Answers from your own knowledge base",
    stack: ["n8n", "Qwen", "Milvus", "Chatwoot", "PostgreSQL"],
    summary:
      "A support agent living inside Chatwoot live chat that answers from the company knowledge base through Milvus backed retrieval.",
    detail:
      "Chat memory is stored in Postgres so conversations survive across turns, with custom tools for submitting requirements and handing off to a human representative.",
    tag: "AI automation",
  },
  {
    name: "AI Content Factory",
    kicker: "One prompt, four channels",
    stack: ["n8n", "OpenAI", "Facebook", "LinkedIn"],
    summary:
      "A single chat trigger produces ads, social posts, landing page copy and email campaigns, with generated images and structured output parsing.",
    detail:
      "Nothing publishes without a human. Drafts are emailed for review, approved posts go live on Facebook and LinkedIn, rejected ones go back for regeneration.",
    tag: "AI automation",
  },
  {
    name: "CV Shortlisting Workflow",
    kicker: "Screening that scores itself",
    stack: ["n8n", "Qwen", "Google Sheets"],
    summary:
      "Applications arrive by webhook or form, text is pulled from the PDF, and a Qwen agent scores each candidate against configurable job criteria.",
    detail:
      "Candidates are routed by match threshold, logged to Google Sheets and emailed automatically.",
    tag: "AI automation",
  },
  {
    name: "Invoice to Spreadsheet",
    kicker: "No more retyping",
    stack: ["n8n", "Qwen", "JavaScript"],
    summary:
      "PDF invoices arrive through a form, an LLM extracts the structured fields and the workflow detects the content type on its own.",
    detail:
      "Output is a formatted XLSX file delivered straight to the inbox.",
    tag: "AI automation",
  },
  {
    name: "Self Healing Storage Alarms",
    kicker: "The alarm fixes it, then tells you",
    stack: ["CloudWatch", "Lambda", "EBS", "SNS", "Terraform"],
    summary:
      "Dynamic CloudWatch alarms watch IOPS and throughput on every instance. When a volume gets close to its provisioned limit the alarm fires a Lambda function that raises the IOPS and throughput on the spot, before the workload starts to queue and users notice anything.",
    detail:
      "Engineers get an email through SNS at the same moment, so nobody has to guess why capacity changed. This closes the gap between detection and fix, and it is a large part of how the 99.9% uptime SLA held.",
    tag: "Cloud infrastructure",
  },
  {
    name: "Production EKS Cluster",
    kicker: "Multi AZ Kubernetes on AWS",
    stack: ["EKS", "Load Balancer Controller", "Lambda", "CloudWatch"],
    summary:
      "Multi availability zone cluster with the AWS Load Balancer Controller, horizontal pod autoscaling, cluster autoscaler and Container Insights.",
    detail:
      "Lambda based automated remediation brought incident response time down by 70%.",
    tag: "Cloud infrastructure",
  },
  {
    name: "5TB Database Migration",
    kicker: "On premises to AWS RDS",
    stack: ["AWS DMS", "MySQL", "RDS"],
    summary:
      "End to end migration of 5TB+ of MySQL data using AWS DMS with continuous replication, so the cutover window stayed short and nothing was lost.",
    detail:
      "Query performance improved 40% and database administration overhead dropped by half.",
    tag: "Cloud infrastructure",
  },
];

export const skills = [
  {
    group: "Cloud platforms",
    items: ["AWS EC2", "RDS", "S3", "VPC", "Lambda", "ELB", "Auto Scaling", "Aurora Serverless", "CloudWatch", "CloudTrail", "Secrets Manager", "AWS DRS", "Lightsail", "Azure App Gateway", "Azure WAF", "ARM Templates", "Azure DevOps", "GCP", "Alibaba ECS", "Alibaba OSS"],
  },
  {
    group: "AI and automation",
    items: ["n8n", "LangChain", "OpenAI API", "Qwen LLMs", "RAG pipelines", "Milvus", "AI agents", "Prompt engineering"],
  },
  {
    group: "DevOps and IaC",
    items: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD", "Git", "Docker", "Docker Compose", "Kubernetes", "Helm"],
  },
  {
    group: "Networking and security",
    items: ["VPC design", "OpenVPN", "Security groups", "NACLs", "Route 53", "SSL/TLS", "WAF", "IAM", "Zero trust"],
  },
  {
    group: "Observability",
    items: ["CloudWatch", "CloudTrail", "Prometheus", "Grafana", "ELK Stack"],
  },
  {
    group: "Data and storage",
    items: ["MySQL", "PostgreSQL", "Aurora", "Milvus", "S3", "EBS", "EFS", "AWS DMS"],
  },
  {
    group: "Languages and systems",
    items: ["Python", "Bash", "JavaScript", "HCL", "PowerShell", "YAML", "JSON", "RHEL", "Ubuntu", "CentOS"],
  },
];

export const certifications = [
  "AWS Certified Solutions Architect, Associate",
  "AWS Certified Cloud Practitioner",
  "AWS DevOps: Continuous Integration & Deployment",
  "Terraform",
  "Ansible Automation",
  "Kubernetes Basics & Helm",
  "Docker Fundamentals",
  "Linux",
  "n8n Workflow Automation, KodeKloud",
];

export const education = {
  degree: "BSc Computer Science",
  school: "University of Engineering and Technology, Lahore",
  year: "May 2024",
  languages: "English, fluent. Urdu, native.",
};
