import { Component } from '@angular/core';

@Component({
  selector: 'app-servers-without-urls',
  //template : '<app-server></app-server><hr><app-server></app-server>',
  template : `
    <p>servers-without-urls works!</p>
    <hr>
    <app-server></app-server>
    <hr>
    <app-server></app-server>
  `,
  //templateUrl: './servers-without-urls.component.html',
  //styleUrls: ['./servers-without-urls.component.css']
  styles : [`
  p {
    color : red;
  }
  `,
  `
    p {
      text-align : center;
    }
  `]
})
export class ServersWithoutUrlsComponent {

}
