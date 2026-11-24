import { siteEn } from './site.en';
import { sitePt, siteUrl } from './site';

describe('conteúdo do portfólio', () => {
    const locales = [sitePt, siteEn];

    it('preserva fotografia, currículos e links públicos nos dois idiomas', () => {
        for (const site of locales) {
            expect(site.links.photo).toBe('assets/igor.jpg');
            expect(site.links.resumePt).toBe('assets/resume/Igor_Pt_Br.pdf');
            expect(site.links.resumeEn).toBe('assets/resume/Igor_EN.pdf');
            expect(site.links.linkedin).toBe('https://www.linkedin.com/in/igor-andrade-dev/');
            expect(site.links.github).toBe('https://github.com/igor-andrade-dev');
            expect(site.links.devto).toBe('https://dev.to/igordevfullstack');
            expect(site.links.regulatrackRepo).toBe(
                'https://github.com/igor-andrade-dev/RegulaTrack',
            );
        }
    });

    it('usa o domínio canônico e mantém credenciais verificáveis', () => {
        expect(siteUrl).toBe('https://www.igorandrade.dev.br');
        for (const site of locales) {
            expect(site.projects.map((project) => project.id)).toContain('regulatrack');
            expect(site.projects.map((project) => project.id)).toContain('microservicos');
            expect(site.projects.map((project) => project.id)).toContain('autenticare');
            expect(site.credentials.map((item) => item.href)).toEqual([
                'https://www.credly.com/badges/2271ceb0-b06c-4f8c-bdb3-82bb8955e30a',
                'https://www.credly.com/badges/a89c08a3-adf7-4b22-b316-104fc9b2f1bf',
            ]);
            expect(site.programs[0].href).toBe('https://pages.awseducate.com/ETC_badge.html');
            const assembly = site.experience[0];
            expect(assembly.organization).toContain('Assembleia Legislativa');
            expect(assembly.points.join(' ').toLowerCase()).not.toContain('kali');
            expect(assembly.points.join(' ').toLowerCase()).not.toContain('owasp');
        }
        expect(JSON.stringify(locales)).not.toContain('portfolio-igor-angular.vercel.app');
        expect(JSON.stringify(locales)).not.toContain('alwaysdata.net');
    });

    it('não classifica o perfil como júnior nem publica segredo', () => {
        const serialized = JSON.stringify(locales).toLowerCase();
        expect(serialized).not.toContain('júnior');
        expect(serialized).not.toContain('junior');
        expect(serialized).not.toContain('password');
        expect(serialized).not.toContain('senha:');
    });
});
