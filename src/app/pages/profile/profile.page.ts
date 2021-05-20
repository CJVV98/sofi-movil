import { Component, OnInit } from '@angular/core';
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
  name!:string;
  urlImage:string="assets/img/user.png";
  constructor(public service:UserService, private photoService: PhotoService) { }

  ngOnInit() {
     this.consultInfo();
  }
  takePhoto(){
    let image=this.photoService.addNewToGallery() as Object;
    setTimeout(()=>{
      this.urlImage=image['__zone_symbol__value'];
    },6000);
    
  }
  consultInfo() {
    let userId=window.localStorage.getItem("user_id");
    this.service.consultUser(userId).subscribe(result=>{
      if(!result){
        return;
      };
      this.user=result.data;
      this.name=this.user.name;
      console.log(this.user);
    });
  }

  

}


