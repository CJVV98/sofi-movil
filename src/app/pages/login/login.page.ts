import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogsOriginal } from '@ionic-native/dialogs';
import { Session } from 'src/app/_model/Session';
import { User } from 'src/app/_model/User';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  session: Session = new Session();
  loginForm: FormGroup;
  constructor(public service: LoginService, private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      user: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(70)]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    });
  }

  login() {
    let user = new User;
    user.username = this.loginForm.value.user;
    user.password = this.loginForm.value.password;
    this.service.login(user).subscribe(data=>{
      console.log(data);
      this.session = data;
      console.log(this.session);
      window.sessionStorage.setItem("token", this.session.access_token);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([`/home/`]));
    }, error => {
      this.showMessage("Verifique sus credenciales", "Inicio de sesión")
    })
  }
  showMessage(message: string, action: string) {
    
  }
}

