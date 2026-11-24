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
    programs: {
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
        eyebrow: string;
        viewProjects: string;
        downloadResume: string;
        contactCta: string;
        photoAlt: string;
        aboutTitle: string;
        experienceTitle: string;
        experienceIntro: string;
        educationTitle: string;
        credentialsTitle: string;
        credentialsIntro: string;
        programsTitle: string;
        programsIntro: string;
        projectsTitle: string;
        projectsIntro: string;
        problem: string;
        contribution: string;
        state: string;
        stackTitle: string;
        stackIntro: string;
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
        footer: string;
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
    impact:
        'Construo sistemas, resolvo problemas complexos e penso em segurança desde a arquitetura.',
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
        certificate:
            'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
    },
    seo: {
        home: {
            title: 'Igor Andrade | Desenvolvedor de Software, Backend, Cloud & Application Security',
            description:
                'Portfólio de Igor Andrade. Backend Java, Angular, AWS e segurança de aplicações, com sistemas em produção e laboratórios de estudo.',
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
        'Sou desenvolvedor de software e trabalho com a construção, a manutenção e a evolução de aplicações web e sistemas de negócio.',
        'Minha atuação passa por backend, frontend, APIs, bancos de dados, autenticação, autorização, controle de acesso e infraestrutura. O que me interessa é entender como o sistema funciona, onde a regra de negócio quebra e como corrigir isso sem perder o que já está em produção.',
        'Estudo segurança de aplicações web, o OWASP Top 10 e investigação de vulnerabilidades em laboratório e em cursos. A credencial Cisco Ethical Hacker inclui atividades práticas com Kali Linux. Esse estudo acompanha o desenvolvimento de software e permanece separado da atuação profissional.',
        'Utilizo ferramentas modernas de IA como apoio à engenharia de software, mantendo validação técnica, revisão de código e responsabilidade sobre as soluções implementadas.',
    ],
    experience: [
        {
            period: 'Dezembro de 2025 — atual',
            role: 'Analista Desenvolvedor Web',
            organization: 'Assembleia Legislativa do Paraná (via Facilities)',
            summary:
                'Desenvolvimento, manutenção e evolução de sistemas web que sustentam processos reais. Nomes de sistemas e dados institucionais permanecem fora desta página. Kali Linux, OWASP Top 10 e investigação de vulnerabilidades estão na formação e nos laboratórios, em seções próprias.',
            points: [
                'Desenvolvimento e evolução de funcionalidades, com integração entre frontend e backend.',
                'Manutenção de aplicações existentes e de sistemas legados.',
                'Implementação de regras de negócio, validação de dados e organização de estados de processo.',
                'Controle de acesso e gerenciamento de permissões nas aplicações mantidas.',
                'Autenticação e autorização consideradas no desenvolvimento e na manutenção do software.',
                'Investigação técnica de falhas de persistência, duplicidade de registros e erros HTTP 500.',
                'Análise de banco de dados e geração de documentos PDF.',
            ],
        },
        {
            period: 'Janeiro de 2022 — novembro de 2024',
            role: 'Desenvolvedor Full Stack',
            organization: 'Apis Solutions',
            summary:
                'Atuação full stack com Laravel e MySQL. O histórico público registra o período, o cargo e a stack; produtos internos da empresa não são detalhados aqui.',
            points: [
                'Desenvolvimento de aplicações web com PHP e Laravel.',
                'Trabalho com MySQL em sistemas de negócio.',
                'Integração entre interface, regras de negócio e banco de dados.',
            ],
        },
    ],
    education: [
        {
            title: 'Análise e Desenvolvimento de Sistemas',
            organization: 'PUCPR — Pontifícia Universidade Católica do Paraná',
            period: 'Em andamento',
            href: '',
            linkLabel: '',
        },
        {
            title: 'Full Stack Java',
            organization: 'EBAC',
            period: 'Julho de 2024 — outubro de 2025',
            href: 'https://drive.google.com/file/d/1Ca7xHzrcTt5f3pLo9Sua1WgAHXBqRk9r/view',
            linkLabel: 'Ver certificado',
        },
    ],
    credentials: [
        {
            title: 'Ethical Hacker',
            organization: 'Cisco Networking Academy',
            period: 'Junho de 2026',
            href: 'https://www.credly.com/badges/2271ceb0-b06c-4f8c-bdb3-82bb8955e30a',
            linkLabel: 'Ver credencial',
            note: 'Conclusão de curso, em nível de estudante. A Credly confirma a emissão para Igor César de Andrade e atividades práticas com Kali Linux. O mês publicado no LinkedIn é junho de 2026.',
        },
        {
            title: 'Introduction to Cybersecurity',
            organization: 'Cisco Networking Academy',
            period: '15 de junho de 2025',
            href: 'https://www.credly.com/badges/a89c08a3-adf7-4b22-b316-104fc9b2f1bf',
            linkLabel: 'Ver credencial',
            note: 'Curso introdutório. A Credly registra a emissão em 15 de junho de 2025 para Igor César de Andrade.',
        },
    ],
    programs: [
        {
            title: 'AWS Educate — Emerging Talent Community',
            organization: 'Amazon Web Services',
            period: 'Novembro de 2025',
            href: 'https://pages.awseducate.com/ETC_badge.html',
            linkLabel: 'Ver página do programa',
            note: 'Programa de aprendizagem para estudantes. O mês vem do LinkedIn. A página pública é um selo da comunidade e não traz identificador individual.',
        },
    ],
    projects: [
        {
            id: 'regulatrack',
            badge: 'Projeto de destaque',
            title: 'RegulaTrack',
            kicker: 'Plataforma de gestão regulatória',
            summary:
                'Aplicação completa para empresas, filiais, licenças, documentos, usuários e permissões. O código, a API documentada e a demonstração publicada estão no ar.',
            problem:
                'Centralizar o controle de licenças e de quem pode operar cada parte do sistema, com autenticação, banco relacional e implantação em nuvem.',
            contribution:
                'Projeto pessoal de ponta a ponta: API Java, frontend Angular, migrações, autorização e infraestrutura AWS.',
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
            status: 'Em produção, com melhorias previstas no próprio repositório.',
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
                    label: 'Swagger',
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
                'Dois serviços independentes, cada um com o próprio banco PostgreSQL, API REST e documentação Swagger. O README público descreve a execução local com Docker Compose.',
            problem:
                'Separar cadastro de clientes e de produtos em serviços que possam subir, versionar e documentar de forma independente.',
            contribution:
                'API em Java 17 e Spring Boot 3, persistência com Spring Data JPA, validação e composição dos containers. Não há demonstração publicada.',
            technologies: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Swagger/OpenAPI'],
            status: 'Projeto de estudo, executado localmente. Sem URL pública.',
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
            summary:
                'Aplicação React, Node.js, Express e MongoDB com cadastro, login e rotas protegidas. O código do login assina um JWT e grava o token em cookie HttpOnly. O repositório também contém telas de agendamento.',
            problem:
                'Manter a sessão fora do armazenamento visível do navegador e só liberar as rotas protegidas depois da autenticação.',
            contribution:
                'Fluxo de registro e login, hash de senha, cookie HttpOnly e publicação do frontend. O endereço da API de produção fica em variável de ambiente e não está no repositório.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
            status: 'Frontend publicado. A hospedagem da API em produção não está documentada no código público.',
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
                'Evolução de uma aplicação clínica já existente, preservando regras de negócio e reorganizando módulos. Não há repositório público deste trabalho, então nenhuma etapa é declarada como concluída.',
            problem:
                'Levar um sistema legado para uma estrutura mais moderna sem tratar a migração como se o produto inteiro já tivesse sido reescrito.',
            contribution:
                'Atuação sobre Laravel, PHP, React, Inertia, PostgreSQL, migrations e controle de permissões. Convênios, procedimentos, pagamentos, frequências e anamnese descrevem o domínio, não uma lista de entregas encerradas.',
            technologies: ['Laravel', 'PHP', 'React', 'Inertia', 'PostgreSQL'],
            status: 'Estado de conclusão pendente de confirmação. Sem repositório público.',
            links: [],
        },
        {
            id: 'processos',
            badge: 'Experiência profissional',
            title: 'Gestão de processos',
            kicker: 'Manutenção de sistemas existentes',
            summary:
                'Manutenção e evolução de sistemas administrativos já em uso. O trabalho é apresentado sem nome de sistema, servidor ou dado institucional.',
            problem:
                'Corrigir falhas em fluxos que já tinham usuários, estados e documentos, sem reconstruir a aplicação do zero.',
            contribution:
                'Investigação em PHP e Laravel, PostgreSQL, Eloquent, controllers, services, middleware de permissão, integridade de registros, PDFs e estados de processo.',
            technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Eloquent'],
            status: 'Experiência profissional anonimizada. Não é um produto público.',
            links: [],
        },
        {
            id: 'momento',
            badge: 'Projeto pessoal',
            title: 'Meu Momento',
            kicker: 'Aplicação mobile',
            summary:
                'Diário pessoal e pausas guiadas, com armazenamento local e áudio no dispositivo. O código confirma React Native, Expo e TypeScript.',
            problem:
                'Oferecer um espaço privado de registro e de áudio sem exigir conta nem enviar o diário para um servidor.',
            contribution:
                'Interface mobile, recursos de áudio, assets locais, configuração Android e preparação de build com EAS. A publicação na Google Play não está comprovada.',
            technologies: ['React Native', 'Expo', 'TypeScript', 'EAS Build'],
            status: 'MVP em evolução. Validação final em aparelho ainda não encerrada no README do projeto.',
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
            note: 'Usado em sistemas de negócio e no RegulaTrack.',
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
            note: 'Interfaces web e o aplicativo Meu Momento.',
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
            note: 'Modelagem, migração e integridade.',
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
            note: 'Aplicado na implantação do RegulaTrack.',
            items: ['AWS EC2', 'AWS RDS', 'Linux', 'Nginx', 'HTTPS e SSL', 'Git'],
        },
        {
            title: 'Segurança aplicada no desenvolvimento',
            note: 'Parte da construção dos sistemas, não um cargo à parte.',
            items: [
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
            note: 'Cursos, CTFs e análise em ambiente autorizado. Separado da experiência profissional de desenvolvimento.',
            items: [
                'OWASP Top 10',
                'Kali Linux',
                'Segurança de aplicações web',
                'Investigação de vulnerabilidades',
                'Análise de requisições HTTP',
                'CTFs',
            ],
        },
    ],
    securityPoints: [
        'Backend e contratos de API',
        'Autenticação e autorização',
        'Controle de acesso e permissões',
        'Validação e integridade de dados',
        'Investigação de falhas',
        'Correção sem quebrar o fluxo existente',
        'Testes de segurança em laboratório autorizado',
    ],
    labs: [
        {
            name: 'GlacierCTF 2026',
            category: 'CTF — web, criptografia, engenharia reversa e outras categorias',
            objective:
                'Investigar desafios em ambiente de competição e registrar o que foi possível confirmar.',
            method:
                'Leitura de requisições HTTP, inspeção de artefatos e separação entre o que foi observado e o que ainda não estava resolvido.',
            tools: 'Navegador, HTTP, anotações e writeups públicos no repositório.',
            learning:
                'A superfície de uma aplicação inclui método, codificação, cache e pipeline de upload. Um status HTTP isolado não prova vulnerabilidade.',
            status: 'Writeups públicos. Flags e passos de exploração não são reproduzidos neste portfólio.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/GlacierCTF-2026',
        },
        {
            name: 'SpookyCTF 2026',
            category: 'CTF — forense, cripto, engenharia reversa, web e esteganografia',
            objective:
                'Documentar desafios resolvidos e os que continuam em análise, sem tratar anotação como experiência profissional.',
            method:
                'Análise de artefatos, tráfego, binários e arquivos, com o estado de cada desafio registrado no próprio material.',
            tools: 'Python e ferramentas de análise citadas nos writeups.',
            learning:
                'Registrar o que foi confirmado evita transformar um laboratório em uma conclusão maior do que a evidência.',
            status: 'Material público de estudo. Este site não publica flags.',
            href: 'https://github.com/igor-andrade-dev/ctf-writeups/tree/main/SpookyCTF-2026',
        },
        {
            name: 'Laboratório de APIs',
            category: 'Estudo local de segurança de APIs',
            objective:
                'Praticar leitura de respostas HTTP e validação de entradas em aplicações controladas.',
            method:
                'Scripts com alvo padrão em loopback. Escrita desligada por padrão. O repositório deixa explícito que isso não é um scanner.',
            tools: 'Bash, Python e curl, apenas no laboratório descrito no repositório.',
            learning:
                'Observar um código de status é o começo da análise, não a prova de uma falha.',
            status: 'Repositório público, restrito a ambiente autorizado.',
            href: 'https://github.com/igor-andrade-dev/api-security-testing',
        },
    ],
    flow: [
        { label: 'Pessoa usuária', detail: 'Navegador' },
        { label: 'Angular', detail: 'Frontend e TypeScript' },
        { label: 'HTTPS', detail: 'Nginx, proxy e SSL' },
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
        eyebrow: 'Portfólio profissional',
        viewProjects: 'Ver projetos',
        downloadResume: 'Baixar currículo',
        contactCta: 'Entrar em contato',
        photoAlt: 'Retrato de Igor Andrade',
        aboutTitle: 'Sobre',
        experienceTitle: 'Experiência',
        experienceIntro:
            'Cargos de desenvolvimento. Credenciais de curso e programas de aprendizagem ficam separados, abaixo da formação.',
        educationTitle: 'Formação',
        credentialsTitle: 'Credenciais de curso',
        credentialsIntro:
            'Conclusões com página pública. São cursos da Cisco Networking Academy, em nível de estudante, e não um cargo de pentest.',
        programsTitle: 'Programas de aprendizagem',
        programsIntro: 'Participação em comunidade de estudo. Não é uma certificação técnica da AWS.',
        projectsTitle: 'Projetos',
        projectsIntro:
            'Uma seleção curta. Cada item diz o que foi feito, o problema, a stack, a contribuição e onde está a evidência.',
        problem: 'Problema',
        contribution: 'Contribuição',
        state: 'Estado',
        stackTitle: 'Tecnologias',
        stackIntro:
            'Agrupadas pelo uso. Não há barra de percentual: a evidência está nos projetos e na experiência.',
        securityTitle: 'Desenvolvimento com segurança desde a arquitetura.',
        securityBody: [
            'Construo e mantenho software com autenticação, autorização, controle de acesso e validação. Essa prática profissional é diferente do estudo de segurança ofensiva.',
            'No laboratório e na Cisco Networking Academy trabalho OWASP Top 10, segurança de aplicações web, investigação de vulnerabilidades e Kali Linux. Os writeups de CTF e o laboratório de APIs estão publicados. Nenhum desses estudos descreve teste, auditoria ou vulnerabilidade da Assembleia Legislativa.',
        ],
        labsTitle: 'Laboratórios de segurança e CTFs',
        labsIntro:
            'Estudo prático em ambiente controlado, separado dos cargos de desenvolvimento.',
        objective: 'Objetivo',
        investigation: 'Investigação',
        tools: 'Ferramentas',
        learning: 'Aprendizado',
        openMaterial: 'Abrir material público',
        contactTitle: 'Vamos conversar sobre um sistema real.',
        contactBody:
            'Procuro oportunidades em backend Java, desenvolvimento full stack, engenharia de software e segurança de aplicações. O currículo e o LinkedIn estão prontos para o recrutador.',
        currentResume: 'Currículo em português',
        footer: 'Portfólio profissional.',
        email: 'E-mail',
    },
    caseStudy: {
        back: 'Voltar aos projetos',
        badge: 'Projeto de destaque',
        lede: 'Plataforma para gerenciar empresas, filiais, licenças regulatórias, documentos, usuários e permissões. A descrição abaixo segue o código e o README públicos do repositório.',
        repo: 'Repositório',
        demo: 'Demonstração',
        problemTitle: 'Problema',
        problem:
            'Licenças, unidades e permissões se perdem quando cada informação vive em um controle separado. O RegulaTrack reúne essa operação em um único produto, com rastreio de vencimento e acesso limitado ao que cada pessoa pode fazer.',
        goalTitle: 'Objetivo',
        goal: 'Construir uma aplicação de negócio completa: regra, API, interface, banco versionado e implantação com HTTPS. O repositório descreve o projeto como portfólio e demonstração, não como um produto com métricas comerciais.',
        architectureTitle: 'Arquitetura',
        architecture:
            'O fluxo confirmado no código e no README é este. Não há serviço além dos que aparecem no repositório.',
        authTitle: 'Autenticação e autorização',
        auth: [
            'O login passa pelo Spring Security. A API emite um JWT, e o frontend envia esse token nas requisições seguintes. Um filtro valida o token antes de liberar o recurso.',
            'Há dois papéis, ADMIN e USER. O USER acessa apenas as permissões atribuídas, em áreas como painel, empresas, filiais, licenças e usuários. A recuperação de acesso gera um token de uso único, com prazo, e a migração de versão de token invalida sessões antigas depois de uma troca de credencial.',
            'Segredos de produção ficam em variáveis de ambiente. O repositório exige uma chave de assinatura própria e deixa o seed de demonstração desligado por padrão.',
        ],
        featuresTitle: 'Funcionalidades no código',
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
            'PostgreSQL, com o esquema versionado pelo Flyway. As migrações públicas seguem esta ordem:',
        infraTitle: 'Infraestrutura',
        infra: [
            'O frontend e a API estão publicados. A API roda em EC2, atrás do Nginx com certificado TLS. O PostgreSQL está no RDS. O backend sobe como serviço no Linux.',
            'O repositório também traz exemplos de limite de taxa no Nginx para as rotas de autenticação e deixa explícito que portas de banco e de aplicação não devem ficar públicas.',
        ],
        decisionsTitle: 'Decisões',
        decisions: [
            'Frontend e backend separados, com contrato REST.',
            'DTO, validação e tratamento de erro na API.',
            'Guards e interceptor de JWT no Angular.',
            'Permissão por operação, além do papel.',
            'Configuração sensível fora do Git.',
        ],
        learningTitle: 'Aprendizados',
        learning: [
            'O valor do projeto está em atravessar a aplicação inteira: regra de negócio, segurança, migração de banco e servidor. Também ficou visível o que ainda não está pronto. O próprio README aponta cobertura de testes, paginação, observabilidade e pipeline de CI como próximos passos. O arquivo de workflow no repositório está desativado.',
            'Não há capturas de tela neste estudo de caso. A interface publicada é a evidência visual, nos links acima.',
        ],
        talk: 'Falar sobre o projeto',
    },
};
