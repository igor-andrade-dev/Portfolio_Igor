import { siteEn } from './site.en';
import { sitePt } from './site';

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

    it('não classifica o perfil como júnior nem publica segredo', () => {
        const serialized = JSON.stringify(locales).toLowerCase();
        expect(serialized).not.toContain('júnior');
        expect(serialized).not.toContain('junior');
        expect(serialized).not.toContain('password');
        expect(serialized).not.toContain('senha:');
    });
});
