import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileItemsComponent } from './profile-items/profile-items.component';
import {environment} from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.google_key
    })

  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
