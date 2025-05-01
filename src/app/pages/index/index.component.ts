import { Component } from '@angular/core';
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { WorksComponent } from "../../components/works/works.component";
import { StatisticsComponent } from "../../components/statistics/statistics.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-index',
  imports: [WelcomeComponent, AboutUsComponent, WorksComponent, StatisticsComponent, ContactComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
