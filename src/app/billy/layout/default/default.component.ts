import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MenuService} from '../../service/menu.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor(
    public menuSrv: MenuService,
  ) { }

  ngOnInit() {
  }
  toggleCollapsed() {
    this.menuSrv.switchCollapsed();
  }
  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

}
