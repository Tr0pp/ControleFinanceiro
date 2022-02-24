import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private nav: NavController,
    private auth: AngularFireAuth,
    private toast: ToastController
  ) { }
  
  registerUser(newUser){
    if(newUser.password == newUser.confirm_pass){
      this.auth.createUserWithEmailAndPassword(newUser.email, newUser.password).then(
        success => this.showMessage('Usuario registrado com sucesso !'));
    }else{
      var mensagem = 'As senhas não correspondem.'
      this.showMessage(mensagem);
    }
  }

  private async showMessage(mensagem) {
    const controller = await this.toast.create({
      message: mensagem,
      duration: 3000
    });

    controller.present();
  }
}

