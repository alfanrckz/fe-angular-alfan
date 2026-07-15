import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { emailPatternValidator } from '@shared/utils/validator_pattern';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '@shared/ui/input-text/input-text.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextComponent
  ],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

  }


}
