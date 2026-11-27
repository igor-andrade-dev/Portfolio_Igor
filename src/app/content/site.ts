/**
 * Conteúdo do portfólio. O português é o padrão; o inglês fica em site.en.ts.
 */
export const siteUrl = 'https://www.igorandrade.dev.br';

export interface ContentLink {
    label: string;
    href: string;
    internal: boolean;
}

export interface PortfolioContent {
    name: string;
    role: string;
    impact: string;
    heroDescription: string;
    email: string;
    links: {
        linkedin: string;
        github: string;
        devto: string;
        resumePt: string;
        resumeEn: string;
        photo: string;
        regulatrackRepo: string;
        regulatrackApp: string;
        regulatrackApi: string;
        ctfWriteups: string;
        apiSecurity: string;
        meuMomentoPrivacy: string;
        certificate: string;
    };
    seo: {
        home: { title: string; description: string; path: string };
        regulatrack: { title: string; description: string; path: string };
    };
    nav: { label: string; fragment: string }[];
    about: string[];
    experience: {
        period: string;
        role: string;
        organization: string;
        summary: string;
        points: string[];
    }[];
    education: {
        description: string;
        title: string;
        organization: string;
        period: string;
        href: string;
        linkLabel: string;
    }[];
    credentials: {
        title: string;
        organization: string;
        period: string;
        href: string;
        linkLabel: string;
        note: string;
    }[];
    projects: {
        id: string;
        badge: string;
        title: string;
        kicker: string;
        summary: string;
        problem: string;
        contribution: string;
        technologies: string[];
        status: string;
        casePath?: string;
        links: ContentLink[];
    }[];
    stack: { title: string; note: string; items: string[] }[];
    securityPoints: string[];
    labs: {
        name: string;
        category: string;
        objective: string;
        method: string;
        tools: string;
        learning: string;
        status: string;
        href: string;
    }[];
    flow: { label: string; detail: string }[];
    migrations: string[];
    ui: {
        skip: string;
        wordmark: string;
        language: string;
        menu: string;
        close: string;
        navLabel: string;
        resume: string;
        resumePt: string;
        resumeEn: string;
        viewProjects: string;
        downloadResume: string;
        contactCta: string;
        photoAlt: string;
        aboutTitle: string;
        experienceTitle: string;
        educationTitle: string;
        credentialsTitle: string;
        projectsTitle: string;
        problem: string;
        contribution: string;
        state: string;
        stackTitle: string;
        securityTitle: string;
        securityBody: string[];
        labsTitle: string;
        labsIntro: string;
        objective: string;
        investigation: string;
        tools: string;
        learning: string;
        openMaterial: string;
        contactTitle: string;
        contactBody: string;
        currentResume: string;
        email: string;
    };
    caseStudy: {
        back: string;
        badge: string;
        lede: string;
        repo: string;
        demo: string;
        problemTitle: string;
        problem: string;
        goalTitle: string;
        goal: string;
        architectureTitle: string;
        architecture: string;
        authTitle: string;
        auth: string[];
        featuresTitle: string;
        features: string[];
        databaseTitle: string;
        database: string;
        infraTitle: string;
        infra: string[];
        decisionsTitle: string;
        decisions: string[];
        learningTitle: string;
        learning: string[];
        talk: string;
    };
}

export const sitePt: PortfolioContent = {
    name: 'Igor Andrade',
    role: 'Desenvolvedor de Software | Backend, Cloud & Application Security',
    heroDescription:
        'Desenvolvo, mantenho e evoluo aplicações web e sistemas de negócio, integrando backend, infraestrutura e segurança de aplicações.',
    impact: 'Construo sistemas, resolvo problemas e penso em segurança desde a arquitetura.',
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
            title: 'Igor Andrade | Desenvolvimento de Software, Backend, Cloud e Segurança',
            description:
                'Conheça a experiência de Igor Andrade em sistemas web, seus projetos de backend e cloud e sua prática em segurança de aplicações.',
            path: '/',
        },
        regulatrack: {
            title: 'RegulaTrack | Estudo de caso — Igor Andrade',
            description:
                'Estudo de caso do RegulaTrack: plataforma de gestão regulatória com Java, Spring Boot, Angular, PostgreSQL e implantação na AWS.',
            path: '/projetos/regulatrack',
        },
    },
    nav: [
        { label: 'Sobre', fragment: 'sobre' },
        { label: 'Experiência', fragment: 'experiencia' },
        { label: 'Projetos', fragment: 'projetos' },
        { label: 'Tecnologias', fragment: 'tecnologias' },
        { label: 'Segurança', fragment: 'seguranca' },
        { label: 'Contato', fragment: 'contato' },
    ],
    about: [
        'Trabalho da interface à infraestrutura, integrando APIs e bancos de dados e cuidando de como usuários e sistemas acessam cada recurso.',
        'Quando uma regra de negócio falha, investigo como o problema afeta o fluxo e valido a correção para preservar o que já funciona em produção.',
        'Uso ferramentas de IA para apoiar a análise de código, a investigação de falhas, a refatoração e a documentação. Reviso as mudanças e assumo as decisões técnicas.',
    ],
    experience: [
        {
            period: 'Dezembro de 2025 — atual',
            role: 'Analista Desenvolvedor Web',
            organization: 'Assembleia Legislativa do Paraná (via Facilities)',
            summary:
                'Desenvolvo e mantenho sistemas web que apoiam processos administrativos na Assembleia. Trabalho com Laravel, PHP, React, Inertia e PostgreSQL na evolução de regras de negócio, na integração entre aplicações e na manutenção em produção.',
            points: [
                'Evoluo funcionalidades de ponta a ponta e modernizo aplicações existentes.',
                'Implemento validações de dados, autenticação, autorização e controle de acesso.',
                'Investigo falhas de aplicação e inconsistências no banco de dados e mantenho fluxos de geração de PDFs.',
                'Uso Kali Linux e ferramentas de segurança na análise técnica de aplicações.',
            ],
        },
        {
            period: 'Janeiro de 2022 — Novembro de 2024',
            role: 'Desenvolvedor Full Stack',
            organization: 'Apis Solutions',
            summary:
                'Desenvolvi aplicações web com PHP e Laravel para sistemas de negócio.',
            points: [
                'Implementei e mantive funcionalidades que ligavam interfaces e regras de negócio.',
                'Trabalhei com MySQL para armazenar e consultar os dados das aplicações.',
            ],
        },
    ],
    education: [
        {
            title: 'Análise e Desenvolvimento de Sistemas',
            description:
                'Desenvolvimento de software, análise de sistemas e bancos de dados.',
            organization: 'PUCPR — Pontifícia Universidade Católica do Paraná',
            period: 'Em andamento',
            href: '',
            linkLabel: '',
        },
        {
            title: 'Full Stack Java',
            description:
                'Desenvolvimento web Full Stack com Java, da API à interface.',
            organization: 'EBAC',
            period: 'Julho de 2024 — Outubro de 2025',
            href: 'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
            linkLabel: 'Ver certificado',
        },
        {
            title: 'AWS Educate — Emerging Talent Community',
            description:
                'Comunidade de aprendizagem do AWS Educate para estudantes que desenvolvem conhecimentos em nuvem.',
            organization: 'Amazon Web Services',
            period: 'Novembro de 2025',
            href: 'https://pages.awseducate.com/ETC_badge.html',
            linkLabel: 'Ver programa',
        },
    ],
    credentials: [
        {
            title: 'Ethical Hacker',
            organization: 'Cisco Networking Academy',
            period: 'Junho de 2026',
            href: 'https://www.credly.com/badges/2271ceb0-b06c-4f8c-bdb3-82bb8955e30a',
            linkLabel: 'Ver credencial',
            note: 'Fundamentos de hacking ético e avaliação de segurança, com prática de análise em Kali Linux.',
        },
        {
            title: 'Introduction to Cybersecurity',
            organization: 'Cisco Networking Academy',
            period: '15 de junho de 2025',
            href: 'https://www.credly.com/badges/a89c08a3-adf7-4b22-b316-104fc9b2f1bf',
            linkLabel: 'Ver credencial',
            note: 'Fundamentos de cibersegurança, ameaças digitais e proteção de informações.',
        },
    ],
    projects: [
        {
            id: 'regulatrack',
            badge: 'Projeto de destaque',
            title: 'RegulaTrack',
            kicker: 'Plataforma de gestão regulatória',
            summary:
                'Plataforma SaaS para gerenciar empresas, filiais, licenças e documentos, com usuários e permissões por operação.',
            problem:
                'Centralizar os registros regulatórios, acompanhar vencimentos e limitar o acesso conforme as atribuições de cada usuário.',
            contribution:
                'Desenvolvi a API REST e a interface web, modelei o banco, implementei a autorização e configurei a implantação na AWS com HTTPS.',
            technologies: [
                'Java 21',
                'Spring Boot',
                'Spring Security',
                'JWT',
                'Angular',
                'TypeScript',
                'APIs REST',
                'Swagger/OpenAPI',
                'PostgreSQL',
                'Flyway',
                'AWS EC2',
                'AWS RDS',
                'Linux',
                'Nginx',
                'HTTPS',
            ],
            status: 'Demonstração publicada.',
            casePath: '/projetos/regulatrack',
            links: [
                {
                    label: 'Estudo de caso',
                    href: '/projetos/regulatrack',
                    internal: true,
                },
                {
                    label: 'Repositório',
                    href: 'https://github.com/igor-andrade-dev/RegulaTrack',
                    internal: false,
                },
                {
                    label: 'Demonstração',
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
            badge: 'Projeto complementar',
            title: 'Sistema de microserviços',
            kicker: 'Customer Service e Product Service',
            summary:
                'Serviços de cadastro de clientes e produtos, cada um com API REST, banco PostgreSQL e documentação OpenAPI.',
            problem:
                'Permitir que cada serviço evolua e seja executado de forma independente.',
            contribution:
                'Implementei as APIs com Spring Data JPA e validação de dados e usei Docker Compose para executar o conjunto localmente.',
            technologies: [
                'Java 17',
                'Spring Boot 3',
                'PostgreSQL',
                'Docker',
                'Swagger/OpenAPI',
            ],
            status: 'Projeto de estudo com execução local.',
            links: [
                {
                    label: 'Repositório',
                    href: 'https://github.com/igor-andrade-dev/MicroServices',
                    internal: false,
                },
            ],
        },
        {
            id: 'autenticare',
            badge: 'Projeto complementar',
            title: 'Autenticare Web',
            kicker: 'Autenticação MERN',
            summary: 'Aplicação MERN com cadastro, login e rotas protegidas.',
            problem:
                'Controlar o acesso a áreas restritas e reduzir a exposição do token de sessão a scripts do navegador.',
            contribution:
                'Integrei a interface React à API Express e implementei hash de senhas e autenticação JWT com cookie HttpOnly.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
            status: 'Frontend publicado.',
            links: [
                {
                    label: 'Repositório',
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
            badge: 'Legado',
            title: 'Sistema clínico',
            kicker: 'Modernização gradual',
            summary:
                'Modernização gradual de um sistema legado de gestão clínica, com evolução de módulos, migração de dados e controle de acesso.',
            problem:
                'Atualizar a aplicação preservando regras de convênios, procedimentos, pagamentos, frequências e anamnese.',
            contribution:
                'Trabalhei na reorganização de módulos, em migrações no PostgreSQL e em ajustes de permissões.',
            technologies: ['Laravel', 'PHP', 'React', 'Inertia', 'PostgreSQL'],
            status: 'Modernização em andamento.',
            links: [],
        },
        {
            id: 'processos',
            badge: 'Experiência profissional',
            title: 'Gestão de processos',
            kicker: 'Manutenção de sistemas existentes',
            summary:
                'Manutenção e evolução de sistemas web usados em processos administrativos.',
            problem:
                'Manter fluxos com múltiplos estados e documentos consistentes enquanto a aplicação segue em uso.',
            contribution:
                'Investiguei inconsistências nos registros e fiz ajustes em permissões, transições de estado e geração de PDFs.',
            technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Eloquent'],
            status: 'Aplicações em uso.',
            links: [],
        },
        {
            id: 'momento',
            badge: 'Projeto pessoal',
            title: 'Meu Momento',
            kicker: 'Aplicação mobile',
            summary:
                'Aplicativo de diário pessoal e pausas guiadas, com armazenamento local e áudio no dispositivo.',
            problem:
                'Permitir registros pessoais e sessões de áudio sem exigir conta ou sincronização com um servidor.',
            contribution:
                'Desenvolvi a interface e os recursos de áudio, configurei o Android e preparei a compilação com EAS Build.',
            technologies: ['React Native', 'Expo', 'TypeScript', 'EAS Build'],
            status: 'MVP em desenvolvimento.',
            links: [
                {
                    label: 'Política de privacidade',
                    href: 'https://github.com/igor-andrade-dev/meu-momento-privacidade',
                    internal: false,
                },
            ],
        },
    ],
    stack: [
        {
            title: 'Backend',
            note: 'APIs e regras de negócio.',
            items: [
                'Java 21',
                'Spring Boot',
                'Spring Security',
                'JWT',
                'PHP',
                'Laravel',
                'APIs REST',
                'Controllers e services',
            ],
        },
        {
            title: 'Frontend',
            note: 'Interfaces web e mobile.',
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
            title: 'Dados',
            note: 'Persistência, migrações e integridade de dados.',
            items: [
                'PostgreSQL',
                'SQL',
                'Flyway',
                'Migrations',
                'MySQL',
                'Integridade de registros',
            ],
        },
        {
            title: 'Cloud e infraestrutura',
            note: 'Implantação e operação do RegulaTrack.',
            items: ['AWS EC2', 'AWS RDS', 'Linux', 'Nginx', 'HTTPS/TLS', 'Git'],
        },
        {
            title: 'Segurança no trabalho',
            note: 'Análise de aplicações e implementação de controles.',
            items: [
                'Kali Linux',
                'Ferramentas de segurança',
                'Autenticação',
                'Autorização',
                'Papéis e permissões',
                'Proteção de endpoints',
                'Validação de entradas',
                'Segredos fora do código',
            ],
        },
        {
            title: 'Estudo em laboratório',
            note: 'Prática em cursos, CTFs e laboratórios autorizados.',
            items: [
                'OWASP Top 10',
                'Segurança de aplicações web',
                'Investigação de vulnerabilidades',
                'Análise de requisições HTTP',
                'CTFs',
            ],
        },
    ],
    securityPoints: [
        'Autenticação e autorização',
        'Controle de acesso por papel e permissão',
        'Validação de entradas e segurança de APIs',
        'Investigação de vulnerabilidades em ambientes autorizados',
    ],
    labs: [
        {
            name: 'GlacierCTF 2026',
            category: 'CTF · Web, criptografia e engenharia reversa',
            objective:
                'Investiguei desafios de segurança em diferentes categorias da competição.',
            method: 'Examinei requisições HTTP e artefatos dos desafios.',
            tools: 'Navegador e ferramentas de análise HTTP.',
            learning:
                'A análise de uma aplicação web passa pelo comportamento das requisições e pelo tratamento dos arquivos enviados.',
            status: 'Relatos publicados.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/GlacierCTF-2026',
        },
        {
            name: 'SpookyCTF 2026',
            category: 'CTF · Forense, criptografia, engenharia reversa e web',
            objective: 'Pratiquei a análise de tráfego, arquivos e binários.',
            method: 'Registrei as observações e o resultado de cada desafio.',
            tools: 'Python',
            learning:
                'Organizar evidências ajuda a retomar a investigação e a identificar hipóteses que ainda precisam de testes.',
            status: 'Relatos publicados.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/SpookyCTF-2026',
        },
        {
            name: 'Laboratório de APIs',
            category: 'Segurança de APIs',
            objective:
                'Avaliei respostas HTTP e validação de entradas em aplicações locais.',
            method: 'Comparei o comportamento das respostas com o resultado esperado para cada entrada.',
            tools: 'Bash, Python e curl.',
            learning:
                'O código de status orienta a análise. O corpo da resposta e a regra da aplicação ajudam a interpretar o resultado.',
            status: 'Laboratório local com código público.',
            href: 'https://github.com/igor-andrade-dev/api-security-testing',
        },
    ],
    flow: [
        { label: 'Pessoa usuária', detail: 'Navegador' },
        { label: 'Angular', detail: 'Frontend e TypeScript' },
        { label: 'HTTPS', detail: 'Proxy Nginx e TLS' },
        { label: 'Spring Boot', detail: 'API REST em Java 21' },
        { label: 'PostgreSQL', detail: 'AWS RDS e Flyway' },
    ],
    migrations: [
        'Empresas e filiais',
        'Licenças',
        'Usuários',
        'Permissões',
        'E-mail',
        'Tokens de recuperação de senha',
        'Documentos de licença',
        'Versão de token para invalidar sessões',
    ],
    ui: {
        skip: 'Ir para o conteúdo',
        wordmark: 'Software, cloud e segurança',
        language: 'Idioma',
        menu: 'Menu',
        close: 'Fechar',
        navLabel: 'Seções do portfólio',
        resume: 'Currículo',
        resumePt: 'Português (PDF)',
        resumeEn: 'Inglês (PDF)',
        viewProjects: 'Ver projetos',
        downloadResume: 'Baixar currículo',
        contactCta: 'Entrar em contato',
        photoAlt: 'Retrato de Igor Andrade',
        aboutTitle: 'Como trabalho',
        experienceTitle: 'Experiência',
        educationTitle: 'Formação',
        credentialsTitle: 'Credenciais de cursos',
        projectsTitle: 'Projetos',
        problem: 'Problema',
        contribution: 'Minha contribuição',
        state: 'Situação',
        stackTitle: 'Tecnologias',
        securityTitle: 'Segurança de aplicações',
        securityBody: [
            'Ao desenvolver uma funcionalidade, avalio quem pode acessá-la, quais dados entram na aplicação e como a API aplica as permissões.',
            'Complemento o uso profissional de ferramentas de segurança com estudos do OWASP Top 10, testes em laboratórios autorizados e desafios CTF.',
        ],
        labsTitle: 'Laboratórios de segurança e CTFs',
        labsIntro:
            'Prática com desafios de competição e análise de APIs em ambiente local.',
        objective: 'Objetivo',
        investigation: 'Investigação',
        tools: 'Ferramentas',
        learning: 'Aprendizado',
        openMaterial: 'Ver material',
        contactTitle: 'Contato',
        contactBody:
            'Estou aberto a conversar sobre oportunidades em desenvolvimento de software, backend Java e segurança de aplicações.',
        currentResume: 'Currículo em português',
        email: 'E-mail',
    },
    caseStudy: {
        back: 'Voltar aos projetos',
        badge: 'Projeto de destaque',
        lede: 'Uma plataforma de gestão regulatória para acompanhar licenças e documentos por empresa e filial, com controle de acesso por operação.',
        repo: 'Repositório',
        demo: 'Demonstração',
        problemTitle: 'Problema',
        problem:
            'Quando cadastros e documentos ficam dispersos, acompanhar vencimentos e definir quem pode atualizar cada registro exige conciliar informações de várias fontes.',
        goalTitle: 'Objetivo',
        goal: 'Reunir esses fluxos em uma aplicação web com API documentada, banco versionado e implantação com HTTPS.',
        architectureTitle: 'Arquitetura',
        architecture:
            'A interface Angular consome a API REST em Spring Boot. O Nginx recebe as conexões HTTPS e a API concentra as regras de negócio e o acesso ao PostgreSQL.',
        authTitle: 'Autenticação e autorização',
        auth: [
            'A API usa Spring Security para autenticar o usuário e validar o JWT a cada requisição protegida.',
            'O papel define o perfil de acesso, e as permissões determinam as operações que cada usuário pode executar. A recuperação de acesso usa um token temporário de uso único e a troca de credencial invalida sessões antigas.',
        ],
        featuresTitle: 'O que implementei',
        features: [
            'Empresas e filiais, com associação entre elas.',
            'Licenças com estados de ativa, a vencer, vencida e pendente.',
            'Documentos vinculados à licença.',
            'Usuários, papéis e permissões.',
            'Painel com totais operacionais.',
            'Recuperação de acesso e documentação OpenAPI.',
        ],
        databaseTitle: 'Banco de dados',
        database:
            'Modelei o banco em PostgreSQL e usei o Flyway para versionar as mudanças de esquema, do cadastro inicial ao controle de sessões.',
        infraTitle: 'Infraestrutura',
        infra: [
            'Implantei a API como serviço Linux na AWS EC2, com Nginx como proxy HTTPS. O PostgreSQL roda na AWS RDS.',
            'A configuração usa variáveis de ambiente para segredos de produção, e o repositório inclui uma configuração de referência para limitar requisições nas rotas de autenticação.',
        ],
        decisionsTitle: 'Decisões',
        decisions: [
            'Frontend e backend separados, com contrato REST.',
            'DTO, validação e tratamento de erro na API.',
            'Guards e interceptor de JWT no Angular.',
            'Permissão por operação, além do papel.',
            'Configuração sensível fora do Git.',
        ],
        learningTitle: 'Aprendizados e próximos passos',
        learning: [
            'A implantação me ajudou a perceber como decisões de autorização, configuração e migração de dados afetam a operação do sistema.',
            'Os próximos passos incluem ampliar a cobertura de testes, implementar paginação e melhorar a observabilidade e a integração contínua.',
        ],
        talk: 'Falar sobre o projeto',
    },
};
