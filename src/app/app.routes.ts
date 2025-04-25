import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StandingsComponent } from './standings/standings.component';

export const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "registration", component:RegistrationComponent ,
  },
  {
    path: "standings", component:StandingsComponent,
  },

]

