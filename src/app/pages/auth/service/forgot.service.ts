import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(
    private nav: NavController,
    private auth: AngularFireAuth,
    private toast: ToastController,
  ) { }

  recoverPass(dadosForm){
    // this.auth.sendPasswordResetEmail(dadosForm.email).then(
    //   () => this.nav.navigateBack('login').
    //   catch(err => {
    //     this.showMessage(err.message)
    //   })
    // );
    this.auth.sendPasswordResetEmail(dadosForm.email).then(
      success => this.showMessage('Email de recuperação enviado !'),
      error => this.showMessage('Email inexistente.')
    );
  }

  private async showMessage(mensagem) {
    const controller = await this.toast.create({
      message: mensagem,
      duration: 3000
    });

    controller.present();
  }
}
