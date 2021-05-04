import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit() {
    
  }

}
