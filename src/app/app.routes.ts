import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent,title: 'Home Component'},
    {path: 'pipe', component:PipesComponent,title: 'Pipe Component'},
];
