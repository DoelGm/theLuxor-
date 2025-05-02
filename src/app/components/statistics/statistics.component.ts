import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCounterAnimation();
  }

  private initCounterAnimation() {
    // Seleccionamos solo los elementos con la clase 'countable'
    const counters = document.querySelectorAll<HTMLElement>('.countable');

    // Configuración de IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const targetValue = parseInt(element.textContent?.replace('+', '') || '0', 10);
          this.animateCounter(element, targetValue);
          observer.unobserve(entry.target); // Deja de observar una vez que el contador ha sido activado
        }
      });
    }, {
      threshold: 0.5 // Se activará cuando el 50% del elemento esté en la vista
    });

    counters.forEach(counter => {
      observer.observe(counter); // Comienza a observar cada contador
    });
  }

  private animateCounter(element: HTMLElement, targetValue: number) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); // Velocidad de incremento del número
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval); // Detiene la animación cuando el contador llega a su valor
      }
      element.textContent = `+${currentValue}`;
    }, 20); // El intervalo de tiempo entre cada incremento
  }
}
