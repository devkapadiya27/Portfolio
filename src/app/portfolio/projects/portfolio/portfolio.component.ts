import { Component } from '@angular/core';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(public router:Router){}
    onBack(){
      this.router.navigate(['portfolio/projects'])
    }
  

}
