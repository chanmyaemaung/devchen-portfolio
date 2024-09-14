import {Component, signal, Signal} from '@angular/core';
import {ProjectCard} from '../../types';
import {NgOptimizedImage, SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import ProjectCardComponent from '@components/project-card/project-card.component';

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
  projectItems: Signal<ProjectCard[]> = signal([
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis eius est expedita ipsam, minima',
      url: 'https://ombraz.com/',
      image: 'https://dummyimage.com/600x400/1a4651/fff.png&text=Dummy+project+card'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis eius est expedita ipsam, minima',
      url: 'https://ombraz.com/',
      image: 'https://dummyimage.com/600x400/1a4651/fff.png&text=Dummy+project+card'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis eius est expedita ipsam, minima',
      url: 'https://ombraz.com/',
      image: 'https://dummyimage.com/600x400/1a4651/fff.png&text=Dummy+project+card'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis eius est expedita ipsam, minima',
      url: 'https://ombraz.com/',
      image: 'https://dummyimage.com/600x400/1a4651/fff.png&text=Dummy+project+card'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis eius est expedita ipsam, minima',
      url: 'https://ombraz.com/',
      image: 'https://dummyimage.com/600x400/1a4651/fff.png&text=Dummy+project+card'
    },
  ]);
}
