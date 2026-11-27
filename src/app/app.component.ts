import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SiteFooterComponent } from './layout/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header.component';
import { LocaleService } from './locale.service';
import { SeoService } from './seo.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    private readonly router = inject(Router);
    private readonly seo = inject(SeoService);
    private readonly locale = inject(LocaleService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly path = signal(this.currentPath());
    protected readonly text = this.locale.content;

    constructor() {
        const document = inject(DOCUMENT);
        inject(ViewportScroller).setOffset(() => [
            0,
            (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0) + 16,
        ]);

        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.path.set(this.currentPath()));

        effect(() => {
            const content = this.locale.content();
            const page = this.path().startsWith('/projetos/regulatrack')
                ? content.seo.regulatrack
                : content.seo.home;
            this.seo.apply(page, this.locale.lang());
        });
    }

    private currentPath(): string {
        const path = this.router.url.split('?')[0].split('#')[0];
        return path || '/';
    }
}
