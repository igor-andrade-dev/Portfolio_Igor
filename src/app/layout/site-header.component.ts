import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../locale.service';

@Component({
    selector: 'app-site-header',
    imports: [RouterLink],
    templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
    protected readonly locale = inject(LocaleService);
    protected readonly text = this.locale.content;
    protected readonly open = signal(false);

    protected toggle(): void {
        this.open.update((value) => !value);
    }

    protected close(): void {
        this.open.set(false);
    }
}
