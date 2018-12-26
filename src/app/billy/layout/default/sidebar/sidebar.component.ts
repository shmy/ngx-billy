import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../service/menu.service';

@Component({
  selector: 'nb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  subItemIndent = 12;
  constructor(
    public menuSrv: MenuService,
  ) { }

  ngOnInit() {
  }

}
