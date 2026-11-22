import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { siteEn } from './content/site.en';
import { PortfolioContent, sitePt } from './content/site';

export type LocaleId = 'pt' | 'en';

const storageKey = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LocaleService {
    private readonly document = inject(DOCUMENT);
    readonly lang = signal<LocaleId>(this.read());
    readonly content = computed<PortfolioContent>(() => (this.lang() === 'en' ? siteEn : sitePt));

    constructor() {
        effect(() => {
            const lang = this.lang();
            this.document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
            try {
                this.document.defaultView?.localStorage.setItem(storageKey, lang);
            } catch {
                // Preferência visual apenas. A página continua no idioma escolhido nesta visita.
            }
        });
    }

    use(lang: LocaleId): void {
        this.lang.set(lang);
    }

    private read(): LocaleId {
        try {
            return this.document.defaultView?.localStorage.getItem(storageKey) === 'en' ? 'en' : 'pt';
        } catch {
            return 'pt';
        }
    }
}
