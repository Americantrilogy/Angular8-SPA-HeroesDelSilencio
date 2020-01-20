import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DiscografiaComponent } from './components/discografia/discografia.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { DiscografiaService } from './servicios/discografia.service';
import { DiscoComponent } from './components/disco/disco.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DiscografiaComponent,
    FooterComponent,
    DiscoComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DiscografiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
