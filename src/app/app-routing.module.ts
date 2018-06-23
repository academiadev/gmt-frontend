import { RefundListComponent } from './pages/refund-list/refund-list.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyEditComponent } from './pages/company-edit/company-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard.service';
import { LoginGuard } from './service/login-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registrar', component: CreateUserComponent, canActivate: [LoginGuard],
    children: [
      { path: ':token', component: CreateUserComponent } 
    ] 
  },
  { path: 'trocar-senha', redirectTo: 'perdi-senha', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: 'trocar-senha/:codigo', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  { path: 'perdi-senha', component: RequestPasswordComponent, canActivate: [LoginGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'reembolso', component: RefundListComponent},
  {
    path: '', component: RefundListComponent, canActivate: [AuthGuard],
    children: [
      { path: 'empresa/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
      { path: 'empresa', component: CompanyComponent, canActivate: [AuthGuard] },
      { path: 'home', component: RefundListComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', component: NotFoundComponent }
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
