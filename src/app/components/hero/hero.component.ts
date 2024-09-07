import {Component} from '@angular/core';
import {SOCIAL_LINKS} from '@constants/social-links.constant';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export default class HeroComponent {

  protected readonly socialLinks = SOCIAL_LINKS;
}
