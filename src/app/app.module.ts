import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertDangerComponent,
    ServerComponent,
    ServesComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet
    
    
  ],
  providers:[],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

