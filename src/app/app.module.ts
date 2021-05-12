import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RegestrationComponent} from './regestration/regestration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    RegestrationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
