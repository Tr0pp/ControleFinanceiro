import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 
  contasForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private conta: ContaService,
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contasForm = this.builder.group({
      valor: [
        '', 
        [
          Validators.required, 
          Validators.min(0.01)
        ]
      ],
      parceiro: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ],
      ],
      descricao: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      tipo: [
        '',
        [
          Validators.required,
        ]
      ],
    });
  }

  /**
   * Registra contas a pagar e a receber
   */
  registraConta(){
    const data = this.contasForm.value;
    this.conta.registraConta(data).then(() => {
      if(data.tipo == 'pagar'){
        this.nav.navigateForward('contas/pagar')
      }else{
        this.nav.navigateForward('contas/receber')
      }
    });
  }
}
