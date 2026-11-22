import { Component, inject } from '@angular/core';
import { LocaleService } from '../locale.service';

@Component({
    selector: 'app-site-footer',
    templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
    protected readonly text = inject(LocaleService).content;
    protected readonly year = new Date().getFullYear();
}
