import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../service/menu.service';

@Component({
  selector: 'nb-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  subItemIndent = 12;
  constructor(
    public menuSrv: MenuService,
  ) { }

  ngOnInit() {
  }

}
