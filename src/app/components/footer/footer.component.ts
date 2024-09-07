import {Component, signal, Signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MENU_ITEMS} from '@constants/menu-links.constant';
import {SOCIAL_LINKS} from '@constants/social-links.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
})
export default class FooterComponent {
  footerMenus = MENU_ITEMS;
  footerSocialLinks = SOCIAL_LINKS;
  currentYear: Signal<number> = signal(new Date().getFullYear());
}
