import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { ComponentModule } from 'src/app/component/component.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    LoginPageRoutingModule
  ],
  // declarations: [LoginPage]
  declarations: []
})
export class LoginPageModule {}
