import { Component } from '@angular/core';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-planner',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './budget-planner.component.html',
  styleUrl: './budget-planner.component.css'
})
export class BudgetPlannerComponent {

  constructor(public router:Router){}
  onBack(){
    this.router.navigate(['portfolio/projects']);
  }

}
