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
      title: 'Vista General – Cocina y Comedor',
      description: 'Renovación integral del área que integra cocina y comedor. Incluye comedor moderno de cristal, piso porcelánico marfil, puerta francesa blanca y ventanal corredizo de cristal que aporta iluminación natural y diseño contemporáneo.',
      imageUrl: 'assets/imgs/proyecto1.jpg'
    },
    {
      title: 'Detalle de Cocina Integral',
      description: 'Diseño funcional con gabinetes blancos de cristal, campana de acero inoxidable, cubierta de granito negro y grifería moderna. La loseta decorativa gris aporta textura y elegancia al fondo de la cocina.',
      imageUrl: 'assets/imgs/proyecto3.jpg'
    },
    {
      title: 'Carpinteria',
      description: '',
      imageUrl: 'assets/imgs/proyecto2.jpg'
    }
  ];
}
