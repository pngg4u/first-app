import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ServersWithoutUrlsComponent } from './servers-without-urls/servers-without-urls.component';
import { ServerClientComponent } from './server-client/server-client.component';
import { ServerClientClassComponent } from './server-client-class/server-client-class.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServersComponent, 
    ServerComponent, 
    ServersWithoutUrlsComponent, ServerClientComponent, ServerClientClassComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
