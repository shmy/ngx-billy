import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../../service/page.service';

@Component({
  selector: 'nb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(
    public pageSrv: PageService,
  ) {
  }

  ngOnInit() {
  }

  handleClose(e: MouseEvent, index: number, isActive: boolean) {
    e.stopPropagation();
    this.pageSrv.removePage(index, isActive);
  }

}
