import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: Menu[] = [
    {
      name: '控制台',
      path: '/dashboard',
      icon: 'home',
      children: [
        {name: '总览', path: '/dashboard/v1', icon: 'home'},
      ]
    },
    {
      name: '通用',
      path: '/general',
      icon: 'home',
      children: [
        {name: '按钮', path: '/general/button', icon: 'home'},
        {name: '图标', path: '/general/icon', icon: 'home'},
      ]
    },
  ];
  isCollapsed = false;
  constructor() {
  }
  switchCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}

export interface Menu {
  icon: string;
  name: string;
  path: string;
  children?: Menu[];
}
