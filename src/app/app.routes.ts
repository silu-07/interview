import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { ChildComponent } from './components/child/child.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { SignalComponent } from './components/signal/signal.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ScssComponent } from './components/scss/scss.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent,title: 'Home Component'},
    {path: 'pipe', component:PipesComponent,title: 'Pipe Component'},
    {path: 'custom-directives', component:CustomDirectivesComponent,title: 'Pipe Component'},
    {path: 'child', component:ChildComponent,title: 'Child Component'},
    {path: 'sibling', component:Sibling1Component,title: 'Sibling Component'},
    {path: 'signal', component:SignalComponent,title: 'Signal Component'},
    {path: 'lifecycle', component:LifecycleComponent,title: 'Life Cycle Component'},
    {path: 'scss', component:ScssComponent,title: 'SCSS Component'},
    {path: 'rxjs', component:RxjsComponent,title: 'RXJS Component'},
];
