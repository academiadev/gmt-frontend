import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
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
    NavigationComponent,
    CompanyComponent,
    CompanyEditComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
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
