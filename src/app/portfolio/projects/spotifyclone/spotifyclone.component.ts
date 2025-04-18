import { Component } from '@angular/core';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotifyclone',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './spotifyclone.component.html',
  styleUrl: './spotifyclone.component.css'
})
export class SpotifycloneComponent {

  constructor(public router:Router){}

 onBack(){
  this.router.navigate(['portfolio/projects']);

  }

}
