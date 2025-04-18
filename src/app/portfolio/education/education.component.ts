import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
   constructor(public router:Router){}
      onBack(){
        this.router.navigate(['portfolio/profile']);
      }
  

}
