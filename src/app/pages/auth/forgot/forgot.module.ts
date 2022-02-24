import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPageRoutingModule } from './forgot-routing.module';

import { ForgotPage } from './forgot.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPageRoutingModule,
    ComponentModule
  ],
  // declarations: [ForgotPage]
  declarations: []
})
export class ForgotPageModule {}


