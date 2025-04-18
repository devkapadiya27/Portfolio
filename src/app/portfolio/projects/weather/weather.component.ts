import { Component } from '@angular/core';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
   constructor(public router:Router){}
    onBack(){
      this.router.navigate(['portfolio/projects']);
    }

}
