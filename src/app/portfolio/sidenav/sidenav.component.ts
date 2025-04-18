import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports:[MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css' 
})

export class SidenavComponent {
      isSlideOut = true;
      constructor(private router : Router ){}
    
      toggleSlideOut():void{
        this.isSlideOut = !this.isSlideOut;
      }
      onProfile(){
        this.router.navigate(['/portfolio/profile']);

      }

      onContact(){
        this.router.navigate(['/portfolio/contact']);

      }

      onProjects(){
        this.router.navigate(['/portfolio/projects']);

      }

    
      
      onExpe(){
        this.router.navigate(['/portfolio/experiance']);
      }
      onEdu(){
        this.router.navigate(['/portfolio/education']);
      }
      onClose(){
        this.router.navigate(['/portfolio/dashboard']);
      }



  }
