import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loans_ui';
  navbar_height ="52px";
  
  ngOnInit(){
    console.log(
      this.navbar_height
    )
  }
}


