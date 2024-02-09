import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RouteGuardService } from './services/route-guard.service';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: SigninComponent },
  {path: 'profile' , component : ProfileComponent, canActivate: [RouteGuardService]},
  {path:'dashboard', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path:'summary', component: SummaryComponent, canActivate: [RouteGuardService]},
  {path:'chat', component: ChatComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
