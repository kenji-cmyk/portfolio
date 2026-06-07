const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "/resume/cv.pdf",
    newTab: true,
  },
];

const words = [
  { text: "APIs", imgPath: "/images/code.svg" },
  { text: "Systems", imgPath: "/images/concepts.svg" },
  { text: "Workflows", imgPath: "/images/ideas.svg" },
  { text: "Services", imgPath: "/images/designs.svg" },
  { text: "APIs", imgPath: "/images/code.svg" },
  { text: "Systems", imgPath: "/images/concepts.svg" },
  { text: "Workflows", imgPath: "/images/ideas.svg" },
  { text: "Services", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Age", value: "22" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Code Commits", value: "1000+" },
  { label: "Coffee Consumed", value: "∞" },
];

const logoIconsList = [];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Scalable Backend Systems",
    desc: "Building Java and Spring Boot services with clean REST APIs, SQL-backed business logic, caching, and production-focused module boundaries.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Secure API Design",
    desc: "Implementing JWT authentication, RBAC authorization, validation, and maintainable access-control flows for protected backend resources.",
  },
  {
    imgPath: "/images/time.png",
    title: "Distributed Workflows",
    desc: "Designing asynchronous and real-time communication with RabbitMQ, Kafka, gRPC, WebSocket, Redis, Docker, and service orchestration.",
  },
];

const techStackImgs = [
  {
    name: "Java",
  },
  {
    name: "Spring Boot",
  },
  {
    name: "Python",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "Docker",
  },
];

const techStackIcons = techStackImgs;

const backendSkillGroups = [
  {
    title: "Backend Development",
    summary:
      "Java and Spring Boot are my main backend stack for building REST APIs, service layers, domain logic, validation, and integration modules. I structure backend code with clear boundaries between controller, application service, domain logic, and persistence.",
    items: [
      "Java",
      "Spring Boot",
      "REST API",
      "Python",
      "Golang",
      "Service Layer Design",
    ],
  },
  {
    title: "Clean Architecture",
    summary:
      "I organize backend modules around use cases and business rules, keeping domain logic independent from frameworks, databases, and delivery mechanisms. This makes APIs easier to test, extend, and maintain as requirements grow.",
    items: [
      "Use Case Layer",
      "Domain Modeling",
      "DTO Mapping",
      "Repository Pattern",
      "Dependency Inversion",
      "Separation of Concerns",
    ],
  },
  {
    title: "Microservice Design",
    summary:
      "I design services with clear ownership, independent responsibilities, and communication patterns that match the workflow. I focus on service boundaries, asynchronous processing, API contracts, and resilient integration between backend services.",
    items: [
      "Service Boundaries",
      "API Contracts",
      "Inter-service Communication",
      "Async Processing",
      "Resilient Workflows",
      "Service Orchestration",
    ],
  },
  {
    title: "API Security",
    summary:
      "I work on secure API flows including authentication, authorization, role-based access control, protected resources, and request validation for backend systems that need clear permission boundaries.",
    items: [
      "JWT Authentication",
      "Spring Security",
      "RBAC",
      "Authorization Rules",
      "Input Validation",
      "2FA Flow",
    ],
  },
  {
    title: "Database and Cache",
    summary:
      "I design relational schemas, write optimized SQL queries, add indexing where needed, and use Redis for caching, session-like data, temporary state, and reducing repeated database work.",
    items: [
      "MS SQL Server",
      "PostgreSQL",
      "Redis",
      "Schema Design",
      "Query Optimization",
      "Indexing",
    ],
  },
  {
    title: "Messaging and Realtime",
    summary:
      "I build asynchronous and event-driven flows with queues and streaming tools, and connect services through RabbitMQ, Kafka, gRPC, and WebSocket depending on latency and delivery requirements.",
    items: [
      "RabbitMQ",
      "Kafka",
      "gRPC",
      "WebSocket",
      "Event-driven Architecture",
      "Message Queue Integration",
    ],
  },
];

const projects = [
  {
    title: "EMIS Voice Detection",
    type: "Commercial Project",
    year: "2026",
    description:
      "Automated bot for meeting platforms featuring real-time recording and speaker diarization. Multi-service architecture manages bot triggers and high-volume audio processing via message queues.",
    techStack: [
      "Golang",
      "Python",
      "RabbitMQ",
      "Whisper AI",
      "Playwright",
      "Docker",
    ],
    image: "/images/emis.png",
    links: {
      github: "https://github.com/kenji-cmyk",
      demo: "#",
    },
    details: {
      whatIDid: [
        "Built automated bot system for Google Meet and Zoom using Playwright",
        "Implemented real-time audio recording and processing pipeline",
        "Integrated Whisper AI for speaker diarization and transcription",
        "Designed multi-service architecture with RabbitMQ message queues",
      ],
      performance: [
        "Optimized audio processing to handle 50+ concurrent meetings",
        "Implemented efficient queue management for high-volume processing",
        "Reduced transcription latency by 40% through parallel processing",
        "Used Golang for high-performance bot orchestration",
      ],
      architecture: [
        "Microservices architecture with Golang and Python services",
        "Event-driven design using RabbitMQ for service communication",
        "Containerized deployment with Docker for scalability",
        "Separation of concerns across bot control, audio processing, and AI inference",
      ],
    },
  },
  {
    title: "Carbon Credit Marketplace",
    type: "Commercial Project",
    year: "2025",
    description:
      "Trading platform for EV carbon credits with buyers, sellers, and independent auditors. Built access control, real-time journey data synchronization, and credit pricing logic.",
    techStack: [
      "Java",
      "Spring Boot",
      "MS SQL Server",
      "REST API",
      "RBAC",
      "Docker",
    ],
    image: "/images/ccmkp.png",
    links: {
      github: "https://github.com/kenji-cmyk",
      demo: "#",
    },
    details: {
      whatIDid: [
        "Developed RESTful APIs for the carbon credit trading platform",
        "Implemented Role-Based Access Control system",
        "Built real-time journey data synchronization module",
        "Created complex credit pricing calculation engine",
      ],
      performance: [
        "Optimized SQL queries for real-time data synchronization",
        "Implemented database indexing reducing query time by 50%",
        "Used connection pooling for efficient database access",
        "Cached frequently accessed pricing data with Redis",
      ],
      architecture: [
        "Clean Architecture with Spring Boot",
        "Layered architecture across controller, service, and repository",
        "RBAC implementation with Spring Security",
        "RESTful API design following OpenAPI specifications",
      ],
    },
  },
  {
    title: "Premier League Statistics",
    type: "Personal Project",
    year: "2025",
    description:
      "Data-driven dashboard for tracking English Premier League match and player performance with real-time statistics aggregation for 20+ teams.",
    techStack: ["React", "Java", "Spring Boot", "REST API", "PostgreSQL"],
    image: "/images/pms.png",
    links: {
      github: "https://github.com/kenji-cmyk",
      demo: "#",
    },
    details: {
      whatIDid: [
        "Built full-stack dashboard with React frontend and Spring Boot backend",
        "Developed REST APIs for match and player statistics",
        "Implemented data aggregation for 20+ teams and 500+ players",
        "Created responsive UI with real-time data visualization",
      ],
      performance: [
        "Optimized PostgreSQL queries with proper indexing",
        "Implemented pagination for large datasets",
        "Used React Query for efficient data fetching and caching",
        "Reduced initial load time by 60% with code splitting",
      ],
      architecture: [
        "RESTful API architecture with Spring Boot",
        "PostgreSQL database with normalized schema",
        "React component-based architecture",
        "Separation of concerns across API, business logic, and data access",
      ],
    },
  },
];

const expCards = [
  {
    review:
      "Five-month backend developer experience at THD Cybersecurity, focused on secure API design, authentication flows, service orchestration, and AI-related backend modules.",
    title: "Backend Developer - THD Cybersecurity",
    date: "5 months",
    responsibilities: [
      "Designed and implemented RESTful APIs for backend modules with maintainable request validation, service logic, and data flow.",
      "Implemented authentication, authorization, and RBAC features to control user access across protected resources.",
      "Worked with Redis and RabbitMQ to support caching, asynchronous processing, and communication between backend services.",
      "Built backend orchestration logic where the backend acted as a central service layer calling and coordinating downstream services.",
      "Integrated AI embedding workflows into backend features, preparing data for semantic search and AI-powered processing.",
    ],
  },
];

const expLogos = [];

const testimonials = [];

const resumeInfo = {
  title: "Nguyen Anh Khoi Resume",
  fileName: "cv.pdf",
  filePath: "/resume/cv.pdf",
};

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/kna23_1/",
  },
  {
    name: "Facebook",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100092984906364",
  },
  {
    name: "GitHub",
    imgPath: "/images/github.svg",
    url: "https://github.com/kenji-cmyk",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/nguy%E1%BB%85n-kh%C3%B4i-242a67327/",
  },
];

export {
  words,
  abilities,
  projects,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  backendSkillGroups,
  resumeInfo,
  navLinks,
};
