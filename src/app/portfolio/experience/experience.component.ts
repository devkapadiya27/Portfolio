import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  
    constructor(public router:Router){}
    onBack(){
      this.router.navigate(['portfolio/profile']);
    }

}
