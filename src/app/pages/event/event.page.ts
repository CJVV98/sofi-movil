import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Event } from 'src/app/_model/Event';
import { EventService } from 'src/app/_service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  public events!: Array<Event>;
  public eventsGen!: Array<Event>;
  dialog!: any;
  constructor(public service:EventService, public alertController: AlertController ) { }
  
  ngOnInit() {
    this.consultEvents();
  }

  consultEvents(){
    this.service.consult().subscribe((result: { data: Event[]; })=>{
      if(!result){
        return;
      };
      this.events=this.eventsGen=result.data;
    }, error=>{
      this.service.consultPublic().subscribe((result: { data: Event[]; })=>{
        if(!result){
          return;
        };
        this.events=this.eventsGen=result.data;
      })
    })
  }
  search(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      this.events = this.eventsGen.filter(p => p.name.includes(filterValue) || p.place.includes(filterValue)
      || p.information.includes(filterValue));
    }, 100)
  }
  async moreEvent(event:Event) {
    const alert = await this.alertController.create({
      cssClass: 'more-event',
      header: event.name,
      subHeader:"Fecha:"+event.start_date.substring(0,16)+ ", "+event.place,
      message: `<img src="${event.resources[0].url}" > <br/> ${event.information}`,
      buttons: ['Cerrar']
    });

    await alert.present();

  }

 }
