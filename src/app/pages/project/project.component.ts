import {Component, signal, Signal} from '@angular/core';
import ProjectCardComponent from '@components/project-card/project-card.component';
import {ProjectCardInterface} from '@interfaces/project-card.interface';
import {PROJECTS_DATA} from '@data/project.data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [
    ProjectCardComponent
  ]
})
export class ProjectComponent {
  allProjectItems: Signal<ProjectCardInterface[]> = signal(PROJECTS_DATA);
}
