import { Component, ElementRef,  ViewChild, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild('nav') nav!: ElementRef;
  constructor(private eleRef:ElementRef, private appComp : AppComponent){

  }


  ngOnInit(): void {

    this.appComp.navbar_height = this.eleRef.nativeElement.offsetHeight.offsetHeight;
  }

}
