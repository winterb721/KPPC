import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
     {path:'', redirectTo: 'signin', pathMatch: 'full'},
     {path:'signin', component:SigninComponent},
     {path:'home', component:HomeComponent},
     {path:'register', component:RegisterComponent}
    ];
