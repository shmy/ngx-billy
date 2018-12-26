import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd, ActivationStart, NavigationStart, Router} from '@angular/router';
import {PageService} from '../../../service/page.service';

@Component({
  selector: 'nb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(
    private router: Router,
    public pageSrv: PageService,
  ) { }

  ngOnInit() {
  }

  handleItemClick(path: string) {
    this.router.navigateByUrl(path);
  }

}
