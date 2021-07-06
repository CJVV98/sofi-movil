import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { UserService } from 'src/app/_service/user.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  active:boolean=true;
  constructor(private service: LoginService) { }

  ngOnInit() {
    this.active=environment.statusUser=="0";
  }
}
