import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  active:boolean=true;
  constructor(private service: LoginService) { }

  ngOnInit() {
    if(window.localStorage.getItem("token")==null ){
      window.localStorage.setItem("token", "");
      this.active=true;
    }else{
      if(window.localStorage.getItem("token")=="")
       this.active=true;
      else
        this.active=false;
    }
    
  }

}
