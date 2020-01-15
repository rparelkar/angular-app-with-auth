
﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
