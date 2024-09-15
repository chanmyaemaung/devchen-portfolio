import {Component, signal} from '@angular/core';
import {NgOptimizedImage, SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import ProjectCardComponent from '@components/project-card/project-card.component';
import {PROJECTS_DATA} from '@data/project.data';
import {ProjectCardInterface} from '@interfaces/project-card.interface';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SlicePipe,
    RouterLink,
    ProjectCardComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projectItems = signal<ProjectCardInterface[]>(PROJECTS_DATA);
}
