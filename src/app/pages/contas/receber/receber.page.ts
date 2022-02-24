import { Component, OnInit } from '@angular/core';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
})
export class ReceberPage implements OnInit {
  
  listaContas;
  constructor(
    private conta: ContaService,
  ) { }

  ngOnInit() {
    this.conta.lista('receber').subscribe(x => this.listaContas = x);
  }

  remove(conta){
    this.conta.remove(conta);
  }

}
