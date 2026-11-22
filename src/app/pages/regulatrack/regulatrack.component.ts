import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../locale.service';

@Component({
    selector: 'app-regulatrack',
    imports: [RouterLink],
    templateUrl: './regulatrack.component.html',
})
export class RegulaTrackComponent {
    protected readonly text = inject(LocaleService).content;
}
