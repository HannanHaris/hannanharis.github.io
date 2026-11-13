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
    period: "May 2024 - Present",
    duration: "2.5 years",
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
      "Designed and automated the deployment of AIXWorkspace.net across AWS and Alibaba Cloud, and built its self service account provisioning: two n8n workflows that take a person from signup form to a working n8n, PostgreSQL, AI gateway, NocoDB and Open WebUI account with one approval click.",
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
    name: "AIX Workspace Account Provisioning",
    kicker: "From signup form to a working workspace",
    featured: true,
    link: {
      href: "https://aixworkspace.net/access-aix-workspace/",
      label: "Open the live signup page",
    },
    summary:
      "Self service onboarding for AIX Workspace, built as two n8n workflows. A person fills in a form on the website, an admin approves with one click, and a few minutes later they have an n8n login, their own locked down PostgreSQL database, an AI gateway key and ready made credentials. An optional second form adds a vector database, NocoDB and Open WebUI to the same account.",
    detail:
      "Two workflows, 46 nodes, and the approval click is the only manual step. Every email goes out in English or Arabic, and every account is logged to a provisioning table that the second workflow reads back.",
    stages: [
      {
        title: "Workflow 1: Signup",
        meta: "27 nodes",
        steps: [
          "A webhook receives the form, validates name, email, account type and organisation, then generates a unique username and a strong password.",
          "Admins get an approval email and a Discord alert. The request waits up to 24 hours, and a rejection sends the applicant a bilingual reply.",
          "On approval the n8n user is invited through the API, and a PostgreSQL role and dedicated database are created with public access revoked and CONNECT removed on every other database.",
          "Monthly usage quotas are set for the user and their organisation from stored defaults.",
          "The invite is accepted programmatically. The invite token is minted in pure JavaScript because the n8n task runner blocks the crypto module, then the new user is logged in server side.",
          "A LiteLLM user with a personal API key is created, and Postgres and AI model credentials are injected straight into their n8n personal project.",
          "A welcome email with the login details goes out, and the account is logged to the NocoDB provisioning table.",
        ],
      },
      {
        title: "Workflow 2: Advanced access",
        meta: "19 nodes",
        steps: [
          "The user submits only an email. The workflow looks it up in the provisioning table and reads back their existing username.",
          "No account found: a bilingual email tells them to complete signup first, and nothing else runs.",
          "Account found: a fresh password is generated and the user is granted a shared pgvector RAG database, with isolation enforced by Row Level Security keyed on their Postgres login.",
          "A NocoDB base is created for them, a NocoDB user is signed up and invited as creator.",
          "An Open WebUI user is created and added to the model access group, so models are available on first login.",
          "The provisioning table is updated and one email delivers every service credential.",
        ],
      },
    ],
    stack: ["n8n", "PostgreSQL", "pgvector", "Row Level Security", "LiteLLM", "NocoDB", "Open WebUI", "REST APIs", "JavaScript"],
    tag: "AI automation",
  },
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
  {
    name: "DeepFake Audio Detection System",
    kicker: "Final year project, BSc Computer Science",
    stack: ["Python", "Machine Learning", "Audio Signal Processing"],
    summary:
      "A machine learning classifier that detects synthetic and manipulated voice recordings.",
    detail:
      "Acoustic features are extracted from each recording, and model accuracy is evaluated across spoofed audio datasets.",
    tag: "Machine learning",
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

export const speaking = [
  {
    title: "Building Your Career in the Age of AI",
    role: "Seminar Presenter",
    event: "FAST-NUCES University",
    place: "Faisalabad, Pakistan",
    date: "November 2026",
    summary:
      "Represented Puffersoft (Pvt.) Limited to deliver a technical and career guidance session on emerging AI technologies, industry expectations, and practical pathways for engineering students entering the modern tech landscape.",
  },
];
