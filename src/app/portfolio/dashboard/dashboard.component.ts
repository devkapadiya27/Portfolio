import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [SidenavComponent]
})
export class DashboardComponent {
  constructor(public router:Router){}
    onBack(){
      this.router.navigate(['portfolio/projects']);
    }
  
}