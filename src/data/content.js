// Everything on the site is written here.
// Edit this one file to update the portfolio. No other file needs to change.

export const profile = {
  name: "Muhammad Hannan Haris",
  role: "Senior Cloud & AI Engineer",
  tagline: "AWS Certified Solutions Architect",
  location: "Faisalabad, Pakistan",
  availability: "Open to new work, on site or remote",
  intro:
    "I design, deploy and run production cloud infrastructure on AWS, Azure and GCP, and I build the automation that sits on top of it. Terraform pipelines, Kubernetes clusters, disaster recovery, and AI workflows that handle real business processes end to end.",
  email: "hannanharis001@gmail.com",
  phone: "+92 312 7621382",
  linkedin: "https://www.linkedin.com/in/hannan-haris-221a26208",
  linkedinLabel: "/in/hannan-haris-221a26208",
  github: "https://github.com/HannanHaris",
  resumeFile: "/Hannan_Haris_Resume.pdf",
  avatar: "/avatar.png", // drop your picture or cartoon avatar in the public folder
};

export const metrics = [
  { value: 22, prefix: "-", suffix: "%", label: "AWS compute cost", note: "reserved and spot instances, autoscaling, right sizing" },
  { value: 99.9, suffix: "%", label: "uptime SLA held", note: "CloudWatch and CloudTrail alarm coverage", decimals: 1 },
  { value: 400, suffix: " GB", label: "MySQL migrated to RDS", note: "zero data loss via AWS DMS, minimal downtime" },
  { value: 150, suffix: "K+", label: "daily requests served", note: "three tier, multi AZ AWS architecture" },
];

export const experience = [
  {
    company: "Puffersoft (Pvt) Ltd",
    role: "Senior Cloud & AI Engineer",
    place: "Faisalabad, Pakistan",
    period: "March 2024 - Present",
    current: true,
    points: [
      "Designed and deployed a secure three tier AWS architecture with public and private subnets across multiple availability zones, Application Load Balancers, NAT gateways and layered security groups and NACLs, serving around 150,000 user requests a day.",
      "Built a scalable file upload and download system on S3 with multipart uploads and pre signed URLs behind CloudFront, handling files up to 5 GB and about 2,000 uploads a day.",
      "Cut monthly AWS compute cost by 22% with reserved and spot instances and dynamic auto scaling across EC2 and RDS.",
      "Built the monitoring layer in CloudWatch and CloudTrail with dynamic alarms that fix problems on their own. An instance nearing its IOPS or throughput limit triggers a Lambda that raises both before the workload degrades, and emails the team through SNS. This is a large part of how the 99.9% uptime SLA held.",
      "Automated detection and blocking of suspicious traffic with AWS WAF and GuardDuty, with EventBridge and Lambda for remediation, cutting incident response from 45 minutes to near real time.",
      "Converted all monitoring, networking and compute configuration to Terraform so any environment can be rebuilt the same way every time, and moved every hardcoded credential into AWS Secrets Manager to meet SOC 2 and ISO 27001 requirements.",
      "Deployed a production Kubernetes cluster on AWS EKS with the Load Balancer Controller, autoscaling and high availability for containerized services.",
      "Set up backup and disaster recovery with AWS DRS, reaching a 15 minute RPO and 1 hour RTO on critical systems.",
      "Led the migration of a 400 GB production MySQL database to AWS RDS with AWS DMS, zero data loss and minimal downtime.",
      "Built CI/CD pipelines in GitHub Actions that run tests and linting, build Docker images and block any deploy that fails a test.",
      "Designed OpenVPN infrastructure with MFA for encrypted remote access for 50+ team members.",
      "Deployed Alibaba Cloud ECS instances with Docker Compose to host self hosted tools including n8n, PostgreSQL, pgvector, OpenWebUI and NocoDB, and added Azure Application Gateway with WAF against OWASP Top 10 threats.",
      "Shipped client facing n8n automation: CV shortlisting, multi tier document approval, an employee request portal, social content publishing, invoice conversion and a RAG support chatbot.",
      "Mentored 3 junior cloud engineers on AWS practice, Terraform and troubleshooting.",
    ],
  },
  {
    company: "A.R Data Science",
    role: "Data Scientist (Part time, Remote)",
    place: "Faisalabad, Pakistan, remote",
    period: "June 2024 - January 2026",
    points: [
      "Built and cleaned high quality datasets for large language models, used for training, testing and improving model performance.",
      "Designed agentic tasks that helped models reason better and make more accurate decisions.",
      "Reviewed and validated AI generated outputs to keep data quality high and aligned with each project goal.",
      "Used machine learning, statistics and NLP for data analysis, feature engineering and dataset tuning, with exploratory data analysis to find patterns, trends and gaps.",
      "Built automated data pipelines to speed up data processing, and helped put data driven parts into production AI systems.",
      "Worked as a lead and reviewer, guiding junior data scientists and supervising task pipelines, and wrote clear reports and documentation for local and international teams.",
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
      "Lambda based automated remediation keeps services healthy and brings incident response down to near real time.",
    tag: "Cloud infrastructure",
  },
  {
    name: "400 GB Database Migration",
    kicker: "On premises to AWS RDS",
    stack: ["AWS DMS", "MySQL", "RDS"],
    summary:
      "End to end migration of a 400 GB MySQL database using AWS DMS with continuous replication, so the cutover window stayed short and nothing was lost.",
    detail:
      "Query performance improved and database administration overhead dropped after the move to RDS.",
    tag: "Cloud infrastructure",
  },
];

export const skills = [
  {
    group: "Cloud platforms",
    items: ["AWS EC2", "RDS", "S3", "VPC", "Lambda", "ELB", "Auto Scaling", "Aurora Serverless", "CloudFront", "CloudWatch", "CloudTrail", "Secrets Manager", "AWS DRS", "Lightsail", "Azure App Gateway", "Azure WAF", "ARM Templates", "Azure DevOps", "GCP", "Alibaba ECS", "Alibaba OSS"],
  },
  {
    group: "AI and automation",
    items: ["n8n", "LangChain", "OpenAI API", "Qwen LLMs", "RAG pipelines", "Milvus", "AI agents", "Prompt engineering", "LLM dataset curation", "NLP", "Exploratory data analysis"],
  },
  {
    group: "DevOps and IaC",
    items: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD", "Git", "Docker", "Docker Compose", "Kubernetes", "Helm"],
  },
  {
    group: "Networking and security",
    items: ["VPC design", "OpenVPN", "Security groups", "NACLs", "Route 53", "SSL/TLS", "WAF", "GuardDuty", "EventBridge", "IAM", "Zero trust"],
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
