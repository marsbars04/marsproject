import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginCredentials } from './../../models/login.model.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss'],
})
export class LoginComponent implements OnInit {
  credentials = new LoginCredentials()
  form: FormGroup
  btnLoad = false

  constructor(@Inject(FormBuilder) private fb: FormBuilder, private _router: Router) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {}

  login() {
    this._router.navigate([`/dashboard`])
  }
}
