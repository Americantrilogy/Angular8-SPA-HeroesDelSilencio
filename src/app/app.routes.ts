import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { DiscografiaComponent  } from './components/discografia/discografia.component';
import { DiscoComponent  } from './components/disco/disco.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'discografia', component: DiscografiaComponent },
    { path: 'disco/:id', component: DiscoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);