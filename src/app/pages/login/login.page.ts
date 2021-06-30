import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  constructor(public service: LoginService, private router: Router, public alertController: AlertController ) { }

  ngOnInit() {
    window.localStorage.setItem("token", "");
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      user: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(22)]),
    });
  }

  login() {
    let user = new User;
    user.username = this.loginForm.value.user;
    user.password = this.loginForm.value.password;
    this.service.login(user).subscribe(data=>{
      this.session = data;
      window.localStorage.setItem("token", this.session.access_token);
      window.localStorage.setItem("user_id", this.session.user.id.toString());
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([`/home/`]));
    }, error => {
      this.showMessage("Verifique sus credenciales", "Inicio de sesión")
    })
  }
  async showMessage(message: string, action: string) {  
    const alert = await this.alertController.create({
      cssClass: 'my-error',
      header: "Error",
      message: `${message}`,
    });
    await alert.present();
  }

  forgotPassword(){
    this.router.navigateByUrl('/forgot-password', { skipLocationChange: true }).then(() =>
    this.router.navigate([`/forgot-password`]))

  }
}

