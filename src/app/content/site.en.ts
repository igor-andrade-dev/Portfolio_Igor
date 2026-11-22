import { PortfolioContent } from './site';

export const siteEn: PortfolioContent = {
    name: 'Igor Andrade',
    role: 'Software Developer | Backend, Cloud, and Application Security',
    impact: 'I build systems, solve complex problems, and think about security from the architecture up.',
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
        regulatrackApi: 'https://regulatrack-api.duckdns.org/swagger-ui/index.html',
        ctfWriteups: 'https://github.com/igor-andrade-dev/ctf-writeups',
        apiSecurity: 'https://github.com/igor-andrade-dev/api-security-testing',
        meuMomentoPrivacy: 'https://github.com/igor-andrade-dev/meu-momento-privacidade',
        certificate: 'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
    },
    seo: {
        home: {
            title: 'Igor Andrade | Software Developer, Backend, and Application Security',
            description:
                'Professional portfolio of Igor Andrade. Software development, Java, Spring Boot, Angular, APIs, AWS, and application security.',
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
        'I am a software developer. I build, maintain, and evolve web applications and business systems.',
        'My work covers backend, frontend, APIs, databases, authentication, authorization, access control, and infrastructure. I want to understand how a system works, where a business rule breaks, and how to fix it without losing what is already in production.',
        'I am especially interested in application security, vulnerability analysis, and pentest in authorized environments. That practice is still study and lab work: I use what I learn while building software to recognize failures more precisely.',
        'I use modern AI tools to support software engineering, and I keep technical validation, code review, and responsibility for the solutions I ship.',
    ],
    experience: [
        {
            period: 'December 2025 — present',
            role: 'Web Developer Analyst',
            organization: 'Assembleia Legislativa do Paraná (via Facilities)',
            summary:
                'Development, maintenance, and evolution of systems that support real business processes and rules. Internal system names are not published.',
            points: [
                'Development and evolution of features, including frontend and backend integration.',
                'Maintenance of existing applications and legacy systems.',
                'Implementation of business rules, data validation, and process states.',
                'Permission management and access control.',
                'Investigation of persistence failures, duplicate records, and HTTP 500 errors.',
                'Database analysis and PDF document generation.',
            ],
        },
        {
            period: 'January 2022 — November 2024',
            role: 'Full Stack Developer',
            organization: 'Apis Solutions',
            summary:
                'Full stack work with Laravel and MySQL. The public record shows the period, the role, and the stack. Internal company products are not described here.',
            points: [
                'Development of web applications with PHP and Laravel.',
                'Work with MySQL in business systems.',
                'Integration of interface, business rules, and database.',
            ],
        },
    ],
    education: [
        {
            title: 'Analysis and Systems Development',
            organization: 'PUCPR — Pontifical Catholic University of Paraná',
            period: 'In progress',
            href: '',
            linkLabel: '',
        },
        {
            title: 'Full Stack Java',
            organization: 'EBAC',
            period: 'July 2024 — October 2025',
            href: 'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
            linkLabel: 'View certificate',
        },
    ],
    projects: [
        {
            id: 'regulatrack',
            badge: 'Featured project',
            title: 'RegulaTrack',
            kicker: 'Regulatory management platform',
            summary:
                'A complete application for companies, branches, licenses, documents, users, and permissions. The code, the documented API, and the public demo are online.',
            problem:
                'Keep licenses and who can operate each part of the system in one place, with authentication, a relational database, and a cloud deployment.',
            contribution:
                'A personal end-to-end project: Java API, Angular frontend, migrations, authorization, and AWS infrastructure.',
            technologies: [
                'Java 21',
                'Spring Boot',
                'Spring Security',
                'JWT',
                'Angular',
                'PostgreSQL',
                'Flyway',
                'AWS',
                'Nginx',
            ],
            status: 'In production, with improvements already listed in the repository.',
            casePath: '/projetos/regulatrack',
            links: [
                { label: 'Case study', href: '/projetos/regulatrack', internal: true },
                {
                    label: 'Repository',
                    href: 'https://github.com/igor-andrade-dev/RegulaTrack',
                    internal: false,
                },
                { label: 'Live demo', href: 'https://regulatrack.duckdns.org', internal: false },
                {
                    label: 'Swagger',
                    href: 'https://regulatrack-api.duckdns.org/swagger-ui/index.html',
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
                'Evolution of an existing clinical application, preserving business rules and reorganizing modules. There is no public repository for this work, so no stage is declared complete.',
            problem:
                'Move a legacy system toward a more modern structure without treating the migration as if the whole product had already been rewritten.',
            contribution:
                'Work across Laravel, PHP, React, Inertia, PostgreSQL, migrations, and permission control. Insurance plans, procedures, payments, frequencies, and anamnesis describe the domain, not a list of finished deliveries.',
            technologies: ['Laravel', 'PHP', 'React', 'Inertia', 'PostgreSQL'],
            status: 'Completion status still needs confirmation. No public repository.',
            links: [],
        },
        {
            id: 'processos',
            badge: 'Professional experience',
            title: 'Process management',
            kicker: 'Maintaining systems already in use',
            summary:
                'Maintenance and evolution of administrative systems already in use. The work is presented without system names, servers, or institutional data.',
            problem:
                'Fix failures in flows that already had users, states, and documents, without rebuilding the application from scratch.',
            contribution:
                'Investigation in PHP and Laravel, PostgreSQL, Eloquent, controllers, services, permission middleware, record integrity, PDFs, and process states.',
            technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Eloquent'],
            status: 'Anonymized professional experience. Not a public product.',
            links: [],
        },
        {
            id: 'momento',
            badge: 'Personal project',
            title: 'Meu Momento',
            kicker: 'Mobile application',
            summary:
                'A personal journal and guided pauses, with local storage and on-device audio. The code confirms React Native, Expo, and TypeScript.',
            problem:
                'Offer a private space for notes and audio without an account and without sending the journal to a server.',
            contribution:
                'Mobile interface, audio, local assets, Android configuration, and EAS build preparation. Publication on Google Play is not confirmed.',
            technologies: ['React Native', 'Expo', 'TypeScript', 'EAS Build'],
            status: 'An MVP still evolving. Final device validation is not closed in the project README.',
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
            note: 'Used in business systems and in RegulaTrack.',
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
            note: 'Web interfaces and the Meu Momento app.',
            items: ['Angular', 'TypeScript', 'React', 'Inertia', 'React Native', 'Expo', 'HTML', 'CSS'],
        },
        {
            title: 'Data',
            note: 'Modeling, migration, and integrity.',
            items: ['PostgreSQL', 'SQL', 'Flyway', 'Migrations', 'MySQL', 'Record integrity'],
        },
        {
            title: 'Cloud and infrastructure',
            note: 'Applied in the RegulaTrack deployment.',
            items: ['AWS EC2', 'AWS RDS', 'Linux', 'Nginx', 'HTTPS and SSL', 'Git'],
        },
        {
            title: 'Security in development',
            note: 'Part of building the systems, not a separate job title.',
            items: [
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
            note: 'Authorized CTF and analysis practice. Not professional pentest experience.',
            items: [
                'Web application analysis',
                'Vulnerability investigation',
                'HTTP request analysis',
                'CTFs',
                'Pentest in an authorized environment',
            ],
        },
    ],
    securityPoints: [
        'Backend and API contracts',
        'Authentication and authorization',
        'Access control and permissions',
        'Data validation and integrity',
        'Failure investigation',
        'Fixes that keep the existing flow working',
        'Security testing in an authorized lab',
    ],
    labs: [
        {
            name: 'GlacierCTF 2026',
            category: 'CTF — web, cryptography, reverse engineering, and other categories',
            objective: 'Investigate competition challenges and record what could actually be confirmed.',
            method:
                'Reading HTTP requests, inspecting artifacts, and separating what was observed from what was still unsolved.',
            tools: 'Browser, HTTP, notes, and public writeups in the repository.',
            learning:
                'An application surface includes method, encoding, cache, and upload pipeline. An HTTP status alone does not prove a vulnerability.',
            status: 'Public writeups. Flags and exploit steps are not reproduced on this portfolio.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/GlacierCTF-2026',
        },
        {
            name: 'SpookyCTF 2026',
            category: 'CTF — forensics, crypto, reverse engineering, web, and steganography',
            objective:
                'Document solved challenges and the ones still under analysis, without treating notes as professional experience.',
            method:
                'Analysis of artifacts, traffic, binaries, and files, with the state of each challenge recorded in the material itself.',
            tools: 'Python and the analysis tools cited in the writeups.',
            learning:
                'Recording what was confirmed keeps a lab from becoming a conclusion larger than the evidence.',
            status: 'Public study material. This site does not publish flags.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/SpookyCTF-2026',
        },
        {
            name: 'API lab',
            category: 'Local study of API security',
            objective: 'Practice reading HTTP responses and input validation in controlled applications.',
            method:
                'Scripts whose default target is loopback. Writes are off by default. The repository states that this is not a scanner.',
            tools: 'Bash, Python, and curl, only in the lab described in the repository.',
            learning: 'A status code is the start of the analysis, not proof of a flaw.',
            status: 'Public repository, limited to an authorized environment.',
            href: 'https://github.com/igor-andrade-dev/api-security-testing',
        },
    ],
    flow: [
        { label: 'User', detail: 'Browser' },
        { label: 'Angular', detail: 'Frontend and TypeScript' },
        { label: 'HTTPS', detail: 'Nginx, proxy, and SSL' },
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
        eyebrow: 'Professional portfolio',
        viewProjects: 'View projects',
        downloadResume: 'Download résumé',
        contactCta: 'Get in touch',
        photoAlt: 'Portrait of Igor Andrade',
        aboutTitle: 'About',
        experienceTitle: 'Experience',
        experienceIntro:
            'Periods and roles as they appear in the portfolio history. Independent projects are in the next section.',
        educationTitle: 'Education',
        projectsTitle: 'Projects',
        projectsIntro:
            'A short selection. Each item says what was built, the problem, the stack, the contribution, and where the evidence is.',
        problem: 'Problem',
        contribution: 'Contribution',
        state: 'Status',
        stackTitle: 'Technologies',
        stackIntro: 'Grouped by use. There is no percentage bar: the evidence is in the projects and the experience.',
        securityTitle: 'Security from the architecture up.',
        securityBody: [
            'Building software helps me understand how applications are put together, how their parts communicate, and where security problems can appear.',
            'I want to investigate vulnerabilities, understand their causes, and help build safer solutions. The pentest I practice is in labs and authorized competitions, separate from my professional development experience.',
        ],
        labsTitle: 'Security labs and CTFs',
        labsIntro: 'Hands-on study in a controlled environment. It does not replace professional security experience.',
        objective: 'Objective',
        investigation: 'Investigation',
        tools: 'Tools',
        learning: 'What I learned',
        openMaterial: 'Open the public material',
        contactTitle: 'Let’s talk about a real system.',
        contactBody:
            'I am looking for opportunities in Java backend, full stack development, software engineering, and application security. The résumé and LinkedIn are ready for a recruiter.',
        currentResume: 'Résumé in English',
        footer: 'Professional portfolio.',
        email: 'Email',
    },
    caseStudy: {
        back: 'Back to projects',
        badge: 'Featured project',
        lede: 'A platform for companies, branches, regulatory licenses, documents, users, and permissions. The description below follows the public code and the repository README.',
        repo: 'Repository',
        demo: 'Live demo',
        problemTitle: 'Problem',
        problem:
            'Licenses, units, and permissions get lost when each piece of information lives in a separate control. RegulaTrack brings that operation into one product, with expiration tracking and access limited to what each person can do.',
        goalTitle: 'Goal',
        goal: 'Build a complete business application: rules, API, interface, a versioned database, and an HTTPS deployment. The repository describes the project as a portfolio and a demo, not as a product with commercial metrics.',
        architectureTitle: 'Architecture',
        architecture:
            'This is the flow confirmed in the code and the README. There is no service beyond the ones that appear in the repository.',
        authTitle: 'Authentication and authorization',
        auth: [
            'Sign-in goes through Spring Security. The API issues a JWT, and the frontend sends that token on the following requests. A filter validates the token before opening the resource.',
            'There are two roles, ADMIN and USER. USER can reach only the assigned permissions, in areas such as dashboard, companies, branches, licenses, and users. Account recovery creates a single-use token with an expiry, and the token-version migration invalidates older sessions after a credential change.',
            'Production secrets stay in environment variables. The repository requires its own signing key and leaves the demo seed off by default.',
        ],
        featuresTitle: 'What the code implements',
        features: [
            'Companies and branches, with a link between them.',
            'Licenses with active, expiring, expired, and pending states.',
            'Documents attached to a license.',
            'Users, roles, and permissions.',
            'A dashboard with operational totals.',
            'Account recovery and OpenAPI documentation.',
        ],
        databaseTitle: 'Database',
        database: 'PostgreSQL, with the schema versioned by Flyway. The public migrations follow this order:',
        infraTitle: 'Infrastructure',
        infra: [
            'The frontend and the API are published. The API runs on EC2, behind Nginx with a TLS certificate. PostgreSQL is on RDS. The backend starts as a Linux service.',
            'The repository also includes sample Nginx rate limits for the authentication routes and states that database and application ports must not be public.',
        ],
        decisionsTitle: 'Decisions',
        decisions: [
            'Separate frontend and backend, with a REST contract.',
            'DTOs, validation, and error handling in the API.',
            'Route guards and a JWT interceptor in Angular.',
            'Permission per operation, in addition to the role.',
            'Sensitive configuration kept out of Git.',
        ],
        learningTitle: 'What I learned',
        learning: [
            'The value of the project is crossing the whole application: business rules, security, database migration, and the server. What is still unfinished is also visible. The README itself lists test coverage, pagination, observability, and a CI pipeline as next steps. The workflow file in the repository is disabled.',
            'There are no screenshots in this case study. The published interface is the visual evidence, in the links above.',
        ],
        talk: 'Talk about this project',
    },
};
