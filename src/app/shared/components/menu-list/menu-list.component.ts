import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.styl']
})
export class MenuListComponent implements OnInit {

  navItems = [
    { link: '/dashboard', title: 'Dashboard' },
    { link: '/heroes', title: 'Heroes' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
