import { Component } from '@angular/core';
import { WelcomeComponent } from "../../components/welcome/welcome.component";

@Component({
  selector: 'app-index',
  imports: [WelcomeComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
