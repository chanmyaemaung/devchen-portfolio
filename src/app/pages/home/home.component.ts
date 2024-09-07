import {Component} from '@angular/core';
import {NgSwitch} from '@angular/common';
import {SOCIAL_LINKS} from '@constants/index';
import {AboutMeComponent} from '@components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgSwitch, AboutMeComponent],
})
export default class HomeComponent {
  socialLinks = SOCIAL_LINKS;
}
