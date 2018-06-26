import { RefundListComponent } from './pages/refund-list/refund-list.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CompanyComponent } from './pages/company/company.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard.service';
import { LoginGuard } from './service/login-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'registrar', component: CreateUserComponent, canActivate: [LoginGuard],
    children: [
      { path: ':token', component: CreateUserComponent, canActivate: [LoginGuard] }
    ]
  },
  { path: 'perdi-senha', component: RequestPasswordComponent, canActivate: [LoginGuard] },
  { path: 'trocar-senha', redirectTo: 'perdi-senha', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: 'trocar-senha/:codigo', component: ChangePasswordComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RefundListComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'empresa', component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    NgbModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
