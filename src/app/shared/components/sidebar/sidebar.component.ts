import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']
})
export class SidebarComponent implements OnInit {

  navItems = [
    { link: '/dashboard', title: 'Dashboard' },
    { link: '/heroes', title: 'Heroes' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
