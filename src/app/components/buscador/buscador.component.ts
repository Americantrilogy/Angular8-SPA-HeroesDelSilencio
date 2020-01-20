import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscografiaService } from '../../servicios/discografia.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  discos: any[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute, private _discografiaService: DiscografiaService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params.termino);
      this.discos = this._discografiaService.buscarDiscos(params.termino);
      this.termino = params.termino;
      console.log(this.discos);
    });
  }

  irArriba() {
    window.scroll(0, 0);
  }

}
