import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SpotifycloneComponent } from './projects/spotifyclone/spotifyclone.component';
import { BudgetPlannerComponent } from './projects/budget-planner/budget-planner.component';
import { PortfolioComponent } from './projects/portfolio/portfolio.component';
import { WeatherComponent } from './projects/weather/weather.component';


const routes: Routes = [
    { path: '', redirectTo: 'portfolio/projects', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'sidenav', component: SidenavComponent },
    { path: 'contact', component: ContactmeComponent }, 
    {path: 'experiance', component:ExperienceComponent},
    {path:'education', component:EducationComponent},
    {path:'spotifyclone', component:SpotifycloneComponent},
    {path:'budget', component:BudgetPlannerComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'weather', component:WeatherComponent},
    { path: '**', redirectTo: 'portfolio/projects' }
       


   
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
