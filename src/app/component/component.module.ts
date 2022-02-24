import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { BotaoLogoutComponent } from './botao-logout/botao-logout.component';


@NgModule({
  declarations: [
    BotaoVoltarComponent,
    BotaoLogoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BotaoVoltarComponent,
    BotaoLogoutComponent
  ]
})
export class ComponentModule { }
