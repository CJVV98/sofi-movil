import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  form: FormGroup;
  equal: boolean=false;
  userId:number=0;
  formChange: FormGroup;
  constructor(public service: LoginService, private router: Router, public alertController: AlertController ) { }
  continue:boolean;
  continueChange:boolean;
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      'email': new FormControl('')
    });
    this.formChange = new FormGroup({
      'code': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl('')
    });
  }

  sendEmail(){
    let email=this.form .value['email'];
    this.service.forgotPassword(email).subscribe(data=>{
      let error:string=data.error;
      this.continue=false;
      this.continueChange=false;
      if(error.length>2){
        this.showMessage("El correo ingresado no se encuentra registrado","Recuperar","my-error");
      }
      else{
        let infoUser=data.data;
        //this.userId=infoUser.userid;

        this.continue=true;
        this.showMessage("Se ha enviado al correo ingresado un token, por favor verificar","Recuperar","");
      }
    });
  }

  searchCode(event: any) {
    
    const code = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      this.continueChange=false;
       if(code.length==4){
          this.service.verifyCode(Number(code),102).subscribe(data=>{
            let error:string=data.error;
             if(error.length<3){
              this.continueChange=true;
             }else{
              this.showMessage("Codigo errado","Recuperar","my-error");
           }
          })
       }
    }, 1)
  }


  async showMessage(message: string, action: string, classStyle: string) {  
    const alert = await this.alertController.create({
      cssClass: classStyle,
      header: "Informacion",
      message: `${message}`,
    });
    await alert.present();
  }
  changePassword(){
     let password=this.formChange.value['password'];
     this.service.changePassword(102, password).subscribe(data=>{
      let error:string=data.error;
      if(error.length<3){
        setTimeout(()=>{
          this.showMessage("Cambio de clave exitoso","Recuperar","");
        },10)
        this.goBack();
      }else{
       this.showMessage("Error en el cambio de contraseña, intente mas tarde","Recuperar","my-error");
    }
     });
  }

  goBack(){
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() =>
    this.router.navigate([`/login`]))
  }
}

