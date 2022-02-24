import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotService } from '../service/forgot.service';

@Component({
  selector: 'forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  forgotForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: ForgotService
  ) { }

  ngOnInit() {
    this. forgotForm = this.builder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required
        ]
      ]
    });
  }

  recoverPass() {
    const dadosForm = this.forgotForm.value;
    this.service.recoverPass(dadosForm);
  }

}
