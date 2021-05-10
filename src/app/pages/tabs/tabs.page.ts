import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public active:boolean=true;
  constructor() { }

  ngOnInit() {
    let token=window.localStorage.getItem("token");
    this.active=(token !== undefined && token.length>6)?false:true;
  }

}
