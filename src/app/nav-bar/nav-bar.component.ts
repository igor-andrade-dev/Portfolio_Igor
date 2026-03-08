import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

  openDropdown: string | null = null;

  menuItems: NavBarItem[] = [
    { label: 'Home', link: '/', exact: true },
    { label: 'Projects', link: '/projects', exact: false },
    { label: 'Blogs', link: '/blogs', exact: false },
    {
      label: 'Resume',
      children: [
        {
          label: 'Resume (EN)',
          link: 'assets/resume/Igor_EN.pdf',
        },
        {
          label: 'Currículo (PT-BR)',
          link: 'assets/resume/Igor_Pt_Br.pdf',
        },
      ],
    },
  ];

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
    
  }
    // 👇 FECHAR AO CLICAR FORA
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // se NÃO clicou dentro do dropdown, fecha
    if (!target.closest('.dropdown')) {
      this.openDropdown = null;
    }
 }
}