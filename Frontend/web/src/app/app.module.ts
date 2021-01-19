import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewEditPropertyComponent } from './components/new-edit-property/new-edit-property.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    NavbarComponent,
    NewEditPropertyComponent,
    ViewPropertyComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
