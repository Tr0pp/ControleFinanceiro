import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {
  listaContas;

  constructor(
    private conta: ContaService,
  ) { }

  ngOnInit() {
    this.conta.lista('pagar').subscribe(x => this.listaContas = x);
  }

  remove(conta){
    this.conta.remove(conta);
  }
}
