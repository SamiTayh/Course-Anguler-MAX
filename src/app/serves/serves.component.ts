import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrl: './serves.component.scss'
})
export class ServesComponent implements OnInit{
  allownewserver=false;
  CreatedServer="not created server ??"
  ServerName='';
  ServerNames='Mohammad';
  username=""
  reaset=false
  Servertext="text"
  CreatedServertext=false;
  StatusId : number=10
  serverstatus:string='offline';
  serverfor=["test1","test2"];
constructor(){
 setTimeout(() => {
  this.allownewserver=true
  this.reaset=true
 }, 2000);
 this.serverstatus=Math.random() > 0.5 ? 'online': 'ofline'
 
}
ngOnInit(): void {
  
}
getCreatedServer(){
  this.CreatedServertext=true
   this.CreatedServer="success crited server"+this.ServerNames
}
OnUpdateServer(event : Event){
this.ServerName=(<HTMLInputElement>event.target).value;
}
getServerStatus(){
  return this.serverstatus
}
getreset(){
  return this.username="";
}

AddService(){
return this.Servertext
}

getservicefor(){
  this.CreatedServer="success crited server"+this.ServerNames

 this.serverfor.push(this.ServerNames)

}
}
