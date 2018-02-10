import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BootstrapModule } from './theme/bootstrap.module';
import { MaterialModule } from './theme/material.module';

import { APP_ROUTES } from './app.routing';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagersComponent } from './portals/managers/managers.component';
import { DashboardComponent } from './portals/freelancer/dashboard/dashboard.component';
import { DynamicHeaderContentComponent } from './header/dynamic-header-content/dynamic-header-content.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagersComponent,
    DashboardComponent,
    DynamicHeaderContentComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
