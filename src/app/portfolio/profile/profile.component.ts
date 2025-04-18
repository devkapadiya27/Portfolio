import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SidenavComponent,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
