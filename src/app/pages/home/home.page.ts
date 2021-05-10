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
    let token=window.localStorage.getItem("token");
    this.active=(token !== undefined && token.length>6)?false:true;
    
  }

}
