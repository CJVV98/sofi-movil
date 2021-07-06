import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { InfoUser } from 'src/app/_model/InfoUser';
import { PhotoService } from 'src/app/_service/photo.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user!: InfoUser;
  userEdit!: InfoUser;
  name!:string;
  editUser:boolean=false;
  urlImage:string="assets/img/user.png";
  constructor(public service:UserService, private router:Router, private photoService: PhotoService, public alertController: AlertController, public loadingController: LoadingController) { }

  ngOnInit() {
     this.editUser=false;
     this.consultInfo();
  }
  takePhoto(){
    let image=this.photoService.addNewToGallery() as Object;
    setTimeout(()=>{
      this.urlImage=image['__zone_symbol__value'];
      this.presentLoading();
      let userPhoto=new InfoUser();
      userPhoto.photo=this.urlImage;
      this.service.edit(userPhoto,this.user.id).subscribe();
    },6000);
    
  }
  consultInfo() {
    let userId=window.localStorage.getItem("user_id");
    this.service.consultUser(userId).subscribe(result=>{
      if(!result){
        return;
      };
     
      this.user=this.userEdit=result.data;
      this.urlImage=this.user.photo.length>50?this.user.photo:"assets/img/user.png";
      this.name=this.user.name;
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
  editForm(){
    this.editUser=true;
  }
  updateUser(){
    let datUser=new InfoUser();
    datUser.name=this.userEdit.name;
    datUser.lastname=this.userEdit.lastname;
    datUser.phone1=this.userEdit.phone1;
    datUser.address=this.userEdit.address;
    datUser.city=this.userEdit.city;
    this.service.edit(datUser,this.user.id).subscribe(()=>{
      this.editUser=false;
      this.showMessage("Actualizacion exitosa","Editar","");
  
    });
  }

  async showMessage(message: string, action: string, classStyle: string) {  
    const alert = await this.alertController.create({
      cssClass: classStyle,
      header: "Informacion",
      message: `${message}`,
    });
    await alert.present();
  }

  showNotification() {
    this.router.navigate([`/profile/notifications`]);
  }
  showFavorites() {
    this.router.navigate([`/profile/favorites`]);

  }
}


