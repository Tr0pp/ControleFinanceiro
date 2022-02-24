import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: RegisterService
  ) { }

  ngOnInit() {
    this.registerForm = this.builder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(19),
        ],
      ],

      snome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(19),
        ],
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],

      confirm_pass: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],
    });
  }

  createUser(){
    const newUser = this.registerForm.value;
    this.service.registerUser(newUser);
  }

}
