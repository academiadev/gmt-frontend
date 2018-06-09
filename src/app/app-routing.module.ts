import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './service/auth-guard.service';
import { LoginGuard } from './service/login-guard.service';
import { DashComponent } from './dash/dash.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '', component: NavigationComponent, canActivate: [AuthGuard],
    children: [
      { path: 'empresa/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
      { path: 'empresa', component: CompanyComponent, canActivate: [AuthGuard] },
      { path: 'home', component: DashComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
