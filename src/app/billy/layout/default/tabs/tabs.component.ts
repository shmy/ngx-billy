import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../service/page.service';

@Component({
  selector: 'nb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ViewChild('tabs') tabs: ElementRef;
  constructor(
    public pageSrv: PageService,
  ) {
  }

  ngOnInit() { }

  handleClose(e: MouseEvent, index: number, isActive: boolean) {
    e.stopPropagation();
    this.pageSrv.removePage(index, isActive);
  }
  handleOffsetLeft() {
    const left = this.tabs.nativeElement.scrollLeft;
    const width = this.tabs.nativeElement.getBoundingClientRect().width;
    this.doSetOffSet(left - width);
  }
  handleOffsetRight() {
    const left = this.tabs.nativeElement.scrollLeft;
    const width = this.tabs.nativeElement.getBoundingClientRect().width;
    this.doSetOffSet(left + width);
  }
  private doSetOffSet(left: number) {
    if (left <= 0) {
      left = 0;
    }
    this.tabs.nativeElement.scrollLeft = left;
  }
}
