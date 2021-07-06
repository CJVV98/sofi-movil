import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/_model/Notification';
import { NotificationService } from 'src/app/_service/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications:Array<Notification>;
  constructor(private service: NotificationService) { }

  ngOnInit() {
      this.loadNotification();
  }

  loadNotification(){
     this.service.consult().subscribe((result: { data: Notification[]; })=>{
      if(!result){
        return;
      };
      this.notifications=result.data;
      this.notifications=this.notifications.filter(not=> new Date(not.date)>= new Date());  
    });
  }
}
