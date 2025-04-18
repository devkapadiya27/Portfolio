import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
  
    constructor(public router:Router){}
    onBack(){
      this.router.navigate(['portfolio/profile']);
    }

}
