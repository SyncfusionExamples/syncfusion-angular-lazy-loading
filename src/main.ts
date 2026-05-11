import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule)]
}).catch(err => console.error(err));
