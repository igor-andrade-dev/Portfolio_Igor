import { PortfolioContent } from './site';

export const siteEn: PortfolioContent = {
    name: 'Igor Andrade',
    role: 'Software Developer | Backend, Cloud & Application Security',
    heroDescription:
        'I build and maintain web applications and business systems, bringing together backend development, infrastructure, and application security.',
    impact: 'I build systems, solve problems, and consider security from the design stage.',
    email: 'igormtba@gmail.com',
    links: {
        linkedin: 'https://www.linkedin.com/in/igor-andrade-dev/',
        github: 'https://github.com/igor-andrade-dev',
        devto: 'https://dev.to/igordevfullstack',
        resumePt: 'assets/resume/Igor_Pt_Br.pdf',
        resumeEn: 'assets/resume/Igor_EN.pdf',
        photo: 'assets/igor.jpg',
        regulatrackRepo: 'https://github.com/igor-andrade-dev/RegulaTrack',
        regulatrackApp: 'https://regulatrack.duckdns.org',
        regulatrackApi:
            'https://regulatrack-api.duckdns.org/swagger-ui/index.html',
        ctfWriteups: 'https://github.com/igor-andrade-dev/ctf-writeups',
        apiSecurity: 'https://github.com/igor-andrade-dev/api-security-testing',
        meuMomentoPrivacy:
            'https://github.com/igor-andrade-dev/meu-momento-privacidade',
        certificate:
            'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
    },
    seo: {
        home: {
            title: 'Igor Andrade | Software Development, Cloud and Application Security',
            description:
                'Explore Igor Andrade’s work on web applications, backend and cloud projects, and application security.',
            path: '/',
        },
        regulatrack: {
            title: 'RegulaTrack | Case study — Igor Andrade',
            description:
                'Case study of RegulaTrack: a regulatory management platform built with Java, Spring Boot, Angular, PostgreSQL, and AWS.',
            path: '/projetos/regulatrack',
        },
    },
    nav: [
        { label: 'About', fragment: 'sobre' },
        { label: 'Experience', fragment: 'experiencia' },
        { label: 'Projects', fragment: 'projetos' },
        { label: 'Technologies', fragment: 'tecnologias' },
        { label: 'Security', fragment: 'seguranca' },
        { label: 'Contact', fragment: 'contato' },
    ],
    about: [
        'I work across the interface and infrastructure, connecting APIs and databases and managing how users and systems access each resource.',
        'When a business rule fails, I trace the impact on the workflow and validate the fix to preserve the behavior people rely on in production.',
        'I use AI tools to support code analysis, debugging, refactoring, and documentation. I review the changes and own the technical decisions.',
    ],
    experience: [
        {
            period: 'December 2025 — present',
            role: 'Web Developer Analyst',
            organization: 'Assembleia Legislativa do Paraná (via Facilities)',
            summary:
                'I develop and maintain web systems that support administrative workflows at the Legislative Assembly. I use Laravel, PHP, React, Inertia, and PostgreSQL to update business rules, integrate applications, and maintain production systems.',
            points: [
                'I develop features across the frontend and backend and modernize existing applications.',
                'I implement data validation, authentication, authorization, and access controls.',
                'I investigate application failures and data inconsistencies and maintain PDF generation workflows.',
                'I use Kali Linux and security tools to analyze applications.',
            ],
        },
        {
            period: 'January 2022 — November 2024',
            role: 'Full Stack Developer',
            organization: 'Apis Solutions',
            summary:
                'I built web applications for business systems using PHP and Laravel.',
            points: [
                'I implemented and maintained features that connected user interfaces to business rules.',
                'I used MySQL to store and query application data.',
            ],
        },
    ],
    education: [
        {
            title: 'Analysis and Systems Development',
            description:
                'Software development, systems analysis, and databases.',
            organization: 'PUCPR — Pontifical Catholic University of Paraná',
            period: 'In progress',
            href: '',
            linkLabel: '',
        },
        {
            title: 'Full Stack Java',
            description:
                'Web application development with Java across backend and frontend.',
            organization: 'EBAC',
            period: 'July 2024 — October 2025',
            href: 'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
            linkLabel: 'View certificate',
        },
        {
            title: 'AWS Educate — Emerging Talent Community',
            description:
                'AWS Educate learning community for students building cloud skills.',
            organization: 'Amazon Web Services',
            period: 'November 2025',
            href: 'https://pages.awseducate.com/ETC_badge.html',
            linkLabel: 'View program',
        },
    ],
    credentials: [
        {
            title: 'Ethical Hacker',
            organization: 'Cisco Networking Academy',
            period: 'June 2026',
            href: 'https://www.credly.com/badges/2271ceb0-b06c-4f8c-bdb3-82bb8955e30a',
            linkLabel: 'View credential',
            note: 'Ethical hacking and security assessment fundamentals, with hands-on analysis in Kali Linux.',
        },
        {
            title: 'Introduction to Cybersecurity',
            organization: 'Cisco Networking Academy',
            period: 'June 15, 2025',
            href: 'https://www.credly.com/badges/a89c08a3-adf7-4b22-b316-104fc9b2f1bf',
            linkLabel: 'View credential',
            note: 'Cybersecurity fundamentals, digital threats, and information protection.',
        },
    ],
    projects: [
        {
            id: 'regulatrack',
            badge: 'Featured project',
            title: 'RegulaTrack',
            kicker: 'Regulatory management platform',
            summary:
                'A SaaS platform for managing companies, branches, licenses, and documents, with user permissions for individual operations.',
            problem:
                'Centralize regulatory records, track expiration dates, and scope access to each user’s responsibilities.',
            contribution:
                'I built the REST API and web interface, modeled the database, implemented authorization, and deployed the application on AWS over HTTPS.',
            technologies: [
                'Java 21',
                'Spring Boot',
                'Spring Security',
                'JWT',
                'Angular',
                'TypeScript',
                'REST APIs',
                'Swagger/OpenAPI',
                'PostgreSQL',
                'Flyway',
                'AWS EC2',
                'AWS RDS',
                'Linux',
                'Nginx',
                'HTTPS',
            ],
            status: 'Deployed demo.',
            casePath: '/projetos/regulatrack',
            links: [
                {
                    label: 'Case study',
                    href: '/projetos/regulatrack',
                    internal: true,
                },
                {
                    label: 'Repository',
                    href: 'https://github.com/igor-andrade-dev/RegulaTrack',
                    internal: false,
                },
                {
                    label: 'Live demo',
                    href: 'https://regulatrack.duckdns.org',
                    internal: false,
                },
                {
                    label: 'Swagger/OpenAPI',
                    href: 'https://regulatrack-api.duckdns.org/swagger-ui/index.html',
                    internal: false,
                },
            ],
        },
        {
            id: 'microservicos',
            badge: 'Supporting project',
            title: 'Microservices system',
            kicker: 'Customer Service and Product Service',
            summary:
                'Customer and product services, each with its own REST API, PostgreSQL database, and OpenAPI documentation.',
            problem: 'Allow each service to evolve and run independently.',
            contribution:
                'I built the APIs with Spring Data JPA and input validation and used Docker Compose to run the services locally.',
            technologies: [
                'Java 17',
                'Spring Boot 3',
                'PostgreSQL',
                'Docker',
                'Swagger/OpenAPI',
            ],
            status: 'Study project that runs locally.',
            links: [
                {
                    label: 'Repository',
                    href: 'https://github.com/igor-andrade-dev/MicroServices',
                    internal: false,
                },
            ],
        },
        {
            id: 'autenticare',
            badge: 'Supporting project',
            title: 'Autenticare Web',
            kicker: 'MERN authentication',
            summary:
                'A MERN application with registration, sign-in, and protected routes.',
            problem:
                'Control access to private routes and limit session token exposure to browser scripts.',
            contribution:
                'I connected the React interface to the Express API and implemented credential hashing and JWT authentication with an HttpOnly cookie.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
            status: 'Frontend deployed.',
            links: [
                {
                    label: 'Repository',
                    href: 'https://github.com/igor-andrade-dev/Autenticare_Web',
                    internal: false,
                },
                {
                    label: 'Frontend',
                    href: 'https://igor-autenticare-web.vercel.app/',
                    internal: false,
                },
            ],
        },
        {
            id: 'clinico',
            badge: 'Legacy',
            title: 'Clinical system',
            kicker: 'Gradual modernization',
            summary:
                'Gradual modernization of a legacy clinical management system, covering module updates, data migrations, and access control.',
            problem:
                'Update the application while preserving rules for coverage, procedures, payments, attendance, and patient history.',
            contribution:
                'I worked on module restructuring, PostgreSQL migrations, and permission updates.',
            technologies: ['Laravel', 'PHP', 'React', 'Inertia', 'PostgreSQL'],
            status: 'Modernization in progress.',
            links: [],
        },
        {
            id: 'processos',
            badge: 'Professional experience',
            title: 'Process management',
            kicker: 'Maintaining systems already in use',
            summary:
                'Maintenance and development of web systems that support administrative workflows.',
            problem:
                'Keep workflows with multiple states and documents consistent while the application remains in use.',
            contribution:
                'I investigated inconsistent records and updated permissions, state transitions, and PDF generation.',
            technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Eloquent'],
            status: 'Applications in use.',
            links: [],
        },
        {
            id: 'momento',
            badge: 'Personal project',
            title: 'Meu Momento',
            kicker: 'Mobile application',
            summary:
                'A mobile journal and guided-break app with on-device storage and audio.',
            problem:
                'Offer journaling and audio sessions without an account or server synchronization.',
            contribution:
                'I built the interface and audio features, configured Android, and prepared the build with EAS Build.',
            technologies: ['React Native', 'Expo', 'TypeScript', 'EAS Build'],
            status: 'MVP in development.',
            links: [
                {
                    label: 'Privacy policy',
                    href: 'https://github.com/igor-andrade-dev/meu-momento-privacidade',
                    internal: false,
                },
            ],
        },
    ],
    stack: [
        {
            title: 'Backend',
            note: 'APIs and business logic.',
            items: [
                'Java 21',
                'Spring Boot',
                'Spring Security',
                'JWT',
                'PHP',
                'Laravel',
                'REST APIs',
                'Controllers and services',
            ],
        },
        {
            title: 'Frontend',
            note: 'Web and mobile interfaces.',
            items: [
                'Angular',
                'TypeScript',
                'React',
                'Inertia',
                'React Native',
                'Expo',
                'HTML',
                'CSS',
            ],
        },
        {
            title: 'Data',
            note: 'Persistence, migrations, and data integrity.',
            items: [
                'PostgreSQL',
                'SQL',
                'Flyway',
                'Migrations',
                'MySQL',
                'Record integrity',
            ],
        },
        {
            title: 'Cloud and infrastructure',
            note: 'RegulaTrack deployment and operation.',
            items: ['AWS EC2', 'AWS RDS', 'Linux', 'Nginx', 'HTTPS/TLS', 'Git'],
        },
        {
            title: 'Security at work',
            note: 'Application analysis and security controls.',
            items: [
                'Kali Linux',
                'Security tools',
                'Authentication',
                'Authorization',
                'Roles and permissions',
                'Endpoint protection',
                'Input validation',
                'Secrets kept out of the code',
            ],
        },
        {
            title: 'Lab study',
            note: 'Practice through courses, CTFs, and authorized labs.',
            items: [
                'OWASP Top 10',
                'Web application security',
                'Vulnerability investigation',
                'HTTP request analysis',
                'CTFs',
            ],
        },
    ],
    securityPoints: [
        'Authentication and authorization',
        'Role- and permission-based access control',
        'Input validation and API security',
        'Vulnerability investigation in authorized environments',
    ],
    labs: [
        {
            name: 'GlacierCTF 2026',
            category: 'CTF · Web, cryptography, and reverse engineering',
            objective:
                'I investigated security challenges across multiple competition categories.',
            method: 'I examined HTTP requests and challenge artifacts.',
            tools: 'Browser and HTTP analysis tools.',
            learning:
                'Web application analysis involves request behavior and how the application handles uploaded files.',
            status: 'Writeups published.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/GlacierCTF-2026',
        },
        {
            name: 'SpookyCTF 2026',
            category:
                'CTF · Forensics, cryptography, reverse engineering, and web',
            objective: 'I practiced analyzing traffic, files, and binaries.',
            method: 'I recorded observations and results for each challenge.',
            tools: 'Python',
            learning:
                'Organizing evidence makes it easier to resume an investigation and identify hypotheses that still need testing.',
            status: 'Writeups published.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/SpookyCTF-2026',
        },
        {
            name: 'API lab',
            category: 'API security',
            objective:
                'I evaluated HTTP responses and input validation in local applications.',
            method: 'I compared the responses with the expected behavior for each input.',
            tools: 'Bash, Python, and curl.',
            learning:
                'Status codes guide the analysis. Response bodies and application rules help interpret the result.',
            status: 'Local lab with public source code.',
            href: 'https://github.com/igor-andrade-dev/api-security-testing',
        },
    ],
    flow: [
        { label: 'User', detail: 'Browser' },
        { label: 'Angular', detail: 'Frontend and TypeScript' },
        { label: 'HTTPS', detail: 'Nginx proxy and TLS' },
        { label: 'Spring Boot', detail: 'REST API in Java 21' },
        { label: 'PostgreSQL', detail: 'AWS RDS and Flyway' },
    ],
    migrations: [
        'Companies and branches',
        'Licenses',
        'Users',
        'Permissions',
        'Email',
        'Account recovery tokens',
        'License documents',
        'Token version used to invalidate sessions',
    ],
    ui: {
        skip: 'Skip to content',
        wordmark: 'Software, cloud, and security',
        language: 'Language',
        menu: 'Menu',
        close: 'Close',
        navLabel: 'Portfolio sections',
        resume: 'Résumé',
        resumePt: 'Portuguese (PDF)',
        resumeEn: 'English (PDF)',
        viewProjects: 'View projects',
        downloadResume: 'Download résumé',
        contactCta: 'Get in touch',
        photoAlt: 'Portrait of Igor Andrade',
        aboutTitle: 'How I work',
        experienceTitle: 'Experience',
        educationTitle: 'Education',
        credentialsTitle: 'Course credentials',
        projectsTitle: 'Projects',
        problem: 'Problem',
        contribution: 'My contribution',
        state: 'Status',
        stackTitle: 'Technologies',
        securityTitle: 'Application security',
        securityBody: [
            'When I build a feature, I consider who can access it, what data enters the application, and how the API enforces permissions.',
            'I complement my professional use of security tools with OWASP Top 10 study, testing in authorized labs, and CTF challenges.',
        ],
        labsTitle: 'Security labs and CTFs',
        labsIntro:
            'Hands-on practice with competition challenges and local API analysis.',
        objective: 'Objective',
        investigation: 'Investigation',
        tools: 'Tools',
        learning: 'What I learned',
        openMaterial: 'View material',
        contactTitle: 'Contact',
        contactBody:
            'I’m open to discussing opportunities in software development, Java backend, and application security.',
        currentResume: 'Résumé in English',
        email: 'Email',
    },
    caseStudy: {
        back: 'Back to projects',
        badge: 'Featured project',
        lede: 'A regulatory management platform for tracking licenses and documents by company and branch, with access controls for individual operations.',
        repo: 'Repository',
        demo: 'Live demo',
        problemTitle: 'Problem',
        problem:
            'When records and documents are scattered, tracking renewals and controlling who can update each record means reconciling multiple sources.',
        goalTitle: 'Goal',
        goal: 'Bring those workflows into one web application with a documented API, versioned database, and HTTPS deployment.',
        architectureTitle: 'Architecture',
        architecture:
            'The Angular interface calls a Spring Boot REST API. Nginx handles HTTPS connections, while the API owns business rules and access to PostgreSQL.',
        authTitle: 'Authentication and authorization',
        auth: [
            'The API uses Spring Security to authenticate users and validate JWTs on protected requests.',
            'Roles define access profiles, and permissions determine which operations each user can perform. Account recovery uses an expiring, single-use token, and credential changes invalidate older sessions.',
        ],
        featuresTitle: 'What I implemented',
        features: [
            'Companies and branches, with a link between them.',
            'Licenses with active, expiring, expired, and pending states.',
            'Documents attached to a license.',
            'Users, roles, and permissions.',
            'A dashboard with operational totals.',
            'Account recovery and OpenAPI documentation.',
        ],
        databaseTitle: 'Database',
        database:
            'I modeled the data in PostgreSQL and used Flyway to version schema changes, from the initial records to session management.',
        infraTitle: 'Infrastructure',
        infra: [
            'I deployed the API as a Linux service on AWS EC2, with Nginx as the HTTPS proxy. PostgreSQL runs on AWS RDS.',
            'Production secrets are supplied through environment variables, and the repository includes a reference configuration for rate limiting authentication routes.',
        ],
        decisionsTitle: 'Decisions',
        decisions: [
            'Separate frontend and backend, with a REST contract.',
            'DTOs, validation, and error handling in the API.',
            'Route guards and a JWT interceptor in Angular.',
            'Permission per operation, in addition to the role.',
            'Sensitive configuration kept out of Git.',
        ],
        learningTitle: 'Lessons and next steps',
        learning: [
            'Deployment showed me how authorization, configuration, and schema migration decisions affect day-to-day operation.',
            'Next steps include expanding test coverage, implementing pagination, and improving observability and continuous integration.',
        ],
        talk: 'Talk about this project',
    },
};
