import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPage } from './forgot/forgot.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { TopoLoginComponent } from './component/topo-login/topo-login.component';


const routes: Routes = [ 
  {
    path: '', children: [
      {path: '', component: LoginPage},
      {path: 'register', component: RegisterPage},
      {path: 'forgot', component: ForgotPage},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LoginPage,
    RegisterPage,
    ForgotPage,
    TopoLoginComponent,
  ],
})
export class AuthRoutingModule {}
