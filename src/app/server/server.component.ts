import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'] // Fixed typo
})
export class ServerComponent {
  StatusId: number = 10;
  StatusName: string = "progress";
  secretpass = false;
  log: number[] = []; // Specified array type as number[]

  getStatusName() {
    return this.StatusName;
  }

  Displayclick() {
    this.secretpass=!this.secretpass;
    this.log.push(this.log.length+1);
  }
}
