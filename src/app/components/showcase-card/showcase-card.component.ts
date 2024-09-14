import {Component, input} from '@angular/core';
import {ProjectCard} from '../../types';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-showcase-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './showcase-card.component.html',
  styleUrl: './showcase-card.component.scss'
})
export class ShowcaseCardComponent {
  projectItem = input.required<ProjectCard>();
}
