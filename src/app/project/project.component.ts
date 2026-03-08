import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';
import { ProjectItem } from '../dto/ProjectItem';

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
    projects: ProjectItem[] = [];

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }

    constructor(
        private dataService: DataService,
        private linkService: LinkService
    ) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ProjectItem[]>('projects')
            .subscribe((data) => {
                this.projects = data;
            });
    }
}
