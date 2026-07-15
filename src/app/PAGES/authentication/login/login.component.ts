import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { AuthService } from '@api/auth/auth.service';
import { HelperService } from '@core/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule
  ],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitting = signal(false);
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private api: AuthService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.errorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const formData = this.form.value;

    this.api.post_login(formData).then((res) => {
      if (res) {
        this.helper.routerLink('/dashboard');
      } else {
        this.errorMessage.set('Nomor telepon atau password salah.');
      }
    }).catch((error) => {
      console.error('Login error:', error);
      this.errorMessage.set(error.message || 'Terjadi kesalahan saat login. Silakan coba lagi.');
    }).finally(() => {
      this.submitting.set(false);
    });
  }

}
