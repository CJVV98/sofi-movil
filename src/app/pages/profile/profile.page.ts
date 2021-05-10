import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/app/_model/InfoUser';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user!: InfoUser;
  name!:string;
  constructor(public service:UserService, ) { }

  ngOnInit() {
     this.consultInfo();
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


