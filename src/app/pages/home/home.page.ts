import { Component } from '@angular/core';
import { LoginService } from '../auth/service/login.service';
import { ContaService } from '../contas/service/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaContas;

  valoresPagar;
  valoresReceber;
  saldo;
  constructor(
    private service: LoginService,
    private conta: ContaService
  ) {}

  ngOnInit() {
    this.conta.listaAll().subscribe(x => this.listaContas = x);
    this.totalContas();
  }

  totalContas(){
    this.conta.listaAll().subscribe(data =>{
      this.valoresPagar = 0;
      this.valoresReceber = 0;
      this.saldo = 0;
      data.map(item =>{
        if(item.tipo === 'pagar'){
          this.valoresPagar += Number(item.valor);
        }else{
          this.valoresReceber += Number(item.valor);
        }
        this.saldo = (this.valoresReceber - this.valoresPagar)
      });
    });
    
  }

  logout(){
    this.service.logout();
  }

}
