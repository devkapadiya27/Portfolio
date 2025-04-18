import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SidenavComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(public router:Router){}
  
  onSpotify(){
  this.router.navigate(['portfolio/spotifyclone']);
  }

  onBudget(){
    this.router.navigate(['portfolio/budget']);
    }

    onWeather(){
      this.router.navigate(['portfolio/weather']);
      }
    
      onPortfolio(){
        this.router.navigate(['portfolio/portfolio']);
        }

        onBack(){
          this.router.navigate(['portfolio/dashboard'])
        }
      

  
  

 

}
