import { CreateUserComponent } from './pages/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashComponent } from './pages/dash/dash.component';
import { LoginComponent } from './pages/login/login.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyEditComponent } from './pages/company-edit/company-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { AppErrorHandler } from './commons/app-error-handler';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { CompanyService } from './service/company.service';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';

export function tokenGetter() {
  const token = localStorage.getItem(environment.tokenName);
  return token;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    NotFoundComponent,
    LoginComponent,
    CreateUserComponent,
    NavigationComponent,
    CompanyComponent,
    CompanyEditComponent,
    RequestPasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          environment.backEndUrl
        ],
        blacklistedRoutes: [
          environment.urls.auth.url
        ]
      }
    }),
    ToastrModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    CompanyService,
    AuthService,
    AppErrorHandler,
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
