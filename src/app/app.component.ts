import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertSuccessComponent } from "./alert-success/alert-success.component";
import { AlertDangerComponent } from "./alert-danger/alert-danger.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
