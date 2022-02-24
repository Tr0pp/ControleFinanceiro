import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController,ToastController } from '@ionic/angular';
import { User } from '@firebase/auth-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: Observable<User>;

  constructor(
    private nav: NavController,
    private auth: AngularFireAuth,
    private toast: ToastController,
  ) { 
    this.isLoggedIn = auth.authState;
  }


  login(user) {
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(
      () => this.nav.navigateForward('home'),
      error => this.showMessage('Dados de acesso incorretos.')
    );
  }

  logout(){
    this.auth.signOut().then(
      () => this.nav.navigateBack('auth')
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

