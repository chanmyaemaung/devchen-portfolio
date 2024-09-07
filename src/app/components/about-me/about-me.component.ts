import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export default class AboutMeComponent {

}
