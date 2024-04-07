import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServerStatus = false;
  serverCreationStatus = "No Server Created";
  serverName = "Testing";

  constructor() {
    setTimeout(() => {
      this.allowServerStatus = true;
    }, 2000);
  }

  ngOnInit() {

  }

  getServerStatus(){
    return this.allowServerStatus;
  }

  onServerCreation(){
    this.serverCreationStatus = "Server is created now";
  }
  
  onServerUpdate (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
