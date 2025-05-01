import { Component } from '@angular/core';
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";

@Component({
  selector: 'app-index',
  imports: [WelcomeComponent, AboutUsComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
