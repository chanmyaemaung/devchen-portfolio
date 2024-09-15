import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ProjectCardInterface} from '../../interfaces';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.scss']
})
export default class ProjectCardComponent {
  @Input({required: true}) projectCardItem!: ProjectCardInterface;
}
