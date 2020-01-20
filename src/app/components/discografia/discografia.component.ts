import { Component, OnInit } from '@angular/core';
import { DiscografiaService, Vinilo } from '../../servicios/discografia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discografia',
  templateUrl: './discografia.component.html',
  styleUrls: ['./discografia.component.css']
})
export class DiscografiaComponent implements OnInit {

  discografia: Vinilo[] = [];
  artista: string;

  constructor( private _discografiaService:DiscografiaService, 
    private router:Router ) {
   }

  ngOnInit() {
    this.discografia = this._discografiaService.getDiscografia();
    console.log(this.discografia);
    this.artista = 'Heroes Del Silencio';
  }

  verDisco(indice: number) {
    this.router.navigate(['/disco', indice]);
    console.log(indice);
  }

}
