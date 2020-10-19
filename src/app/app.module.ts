import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaInternaComponent } from './area-interna/area-interna.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './auth/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AreaInternaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
