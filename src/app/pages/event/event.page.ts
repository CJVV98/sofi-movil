import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  public events!: Array<Event>;
  constructor(public service:EventService) { }

  ngOnInit() {
    this.consultEvents();
  }

  consultEvents(){
    this.service.consult().subscribe((result: { data: Event[]; })=>{
      if(!result){
        return;
      };
      this.events=result.data;
    }, error=>{
      this.service.consultPublic().subscribe((result: { data: Event[]; })=>{
        if(!result){
          return;
        };
        this.events=result.data;
      })
    })
  }

}
