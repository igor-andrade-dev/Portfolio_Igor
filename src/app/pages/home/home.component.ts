import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../locale.service';

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    protected readonly locale = inject(LocaleService);
    protected readonly text = this.locale.content;

    protected resumeHref(): string {
        return this.locale.lang() === 'en' ? this.text().links.resumeEn : this.text().links.resumePt;
    }
}
