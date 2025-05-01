import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  imports: [ CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  // Add any properties or methods you need for this component here
  works = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'assets/imgs/proyecto1.jpg'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'assets/imgs/proyecto2.jpg'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: 'assets/imgs/proyecto3.jpg'
    }
  ];
}
