import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscografiaService } from '../../servicios/discografia.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  disco: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _discografiaService: DiscografiaService, private irDiscografia: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.disco = this._discografiaService.getDisco(params.id);
      console.log(this.disco);
      window.scroll(0, 0);
    });
  }

  volverDiscografia() {
    this.irDiscografia.navigate(['/discografia']);
    window.scroll(0, 0);
  }

}
