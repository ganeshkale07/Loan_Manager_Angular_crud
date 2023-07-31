import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  arrowIcon : boolean = false;

  toggleArrow(){
    this.arrowIcon ? this.arrowIcon = false : this.arrowIcon = true;
  }
}
