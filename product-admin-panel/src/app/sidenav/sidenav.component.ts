import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isOpen = false;
  constructor() {
    this.isOpen = false; }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeNav() {
    this.isOpen = false;
  }


}
