import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { siteUrl } from './content/site';

export interface PageMeta {
    title: string;
    description: string;
    path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
    private readonly title = inject(Title);
    private readonly meta = inject(Meta);
    private readonly document = inject(DOCUMENT);

    apply(page: PageMeta, lang: 'pt' | 'en' = 'pt'): void {
        const url = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
        const image = `${siteUrl}/assets/igor.jpg`;
        const imageAlt = lang === 'en' ? 'Portrait of Igor Andrade' : 'Retrato de Igor Andrade';
        this.title.setTitle(page.title);
        this.meta.updateTag({ name: 'description', content: page.description });
        this.meta.updateTag({ property: 'og:title', content: page.title });
        this.meta.updateTag({ property: 'og:description', content: page.description });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });
        this.meta.updateTag({ property: 'og:locale', content: lang === 'en' ? 'en_US' : 'pt_BR' });
        this.meta.updateTag({ name: 'twitter:title', content: page.title });
        this.meta.updateTag({ name: 'twitter:description', content: page.description });
        this.meta.updateTag({ name: 'twitter:image', content: image });

        this.meta.updateTag({ name: 'twitter:image:alt', content: imageAlt });

        let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonical) {
            canonical = this.document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            this.document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    }
}
