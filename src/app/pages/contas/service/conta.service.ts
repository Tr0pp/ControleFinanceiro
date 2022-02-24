import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  colletion: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
  ) { }

  registraConta(conta){
    conta.id = this.db.createId();
    this.colletion = this.db.collection('conta');
    return this.colletion.doc(conta.id).set(conta)
  }

  lista(tipo){
    this.colletion = this.db.collection('conta', ref => ref.where('tipo', '==', tipo));
    return this.colletion.valueChanges();
  }

  listaAll(){
    this.colletion = this.db.collection('conta');
    return this.colletion.valueChanges();
  }

  // async totalContas() {
  //   this.colletion = this.db.collection('conta');
  //   let vPagar = 0;
  //   let vReceber = 0;
    
  //   await this.colletion.valueChanges().subscribe(data =>{
  //     data.map(item =>{
  //      if(item.tipo === 'pagar'){
  //       vPagar += Number(item.valor);
  //      }else{
  //        vReceber += Number(item.valor);
  //      }
  //     });
  //     return [vReceber, vPagar];
  //   });
  // }

  remove(conta){
    this.colletion = this.db.collection('conta');
    this.colletion.doc(conta.id).delete();
  }
}
