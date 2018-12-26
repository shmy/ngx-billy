import {Component, OnInit} from '@angular/core';
import {NbSetupService} from './billy/service/nb-setup.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private nbSetupSrv: NbSetupService) {
  }

  ngOnInit(): void {
    this.nbSetupSrv.routerSetup();
  }
}

