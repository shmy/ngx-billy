import {Injectable} from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed';
import find from 'lodash/find';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {MenuService} from './menu.service';
import {DefaultRouteReuseStrategy} from '../strategy/default-route-reuse-strategy';

const scrollConfig = {
  scrollMode: 'if-needed',
  block: 'nearest',
  inline: 'nearest',
  behavior: 'smooth',
};

@Injectable({
  providedIn: 'root'
})
export class PageService {
  readonly pages: PageItem[] = [];

  constructor(
    private menuSrv: MenuService,
    private router: Router,
  ) {
  }
  get size() {
    return this.pages.length;
  }
  pushPage(page: PageItem) {
    if (!find(this.pages, page)) {
      this.pages.push(page);
    }
    this.scrollIntoView();
  }
  removePage(index: number, isActive: boolean = false) {
    if (this.size === 1) {
      return;
    }
    DefaultRouteReuseStrategy.deleteRouteSnapshot(this.pages[index].url);
    this.pages.splice(index, 1);
    setTimeout(() => {
      if (isActive) {
        // 第一个
        if (index === 0) {
          this.router.navigateByUrl(this.pages[0].url);
          return;
        }
        // 最后一个
        if (this.size === index) {
          this.router.navigateByUrl(this.pages[this.size - 1].url);
          return;
        }
        // 左一个
        if (this.pages[index - 1]) {
          this.router.navigateByUrl(this.pages[index - 1].url);
          return;
        }
        // 右一个
        if (this.pages[index]) {
          this.router.navigateByUrl(this.pages[index].url);
          return;
        }
      }
    });
  }
  private scrollIntoView() {
    setTimeout(() => {
      const tabItemEl = document.querySelector('.tab-item.active');
      if (tabItemEl) {
        // @ts-ignore
        scrollIntoView(tabItemEl, scrollConfig);
      }
      if (!this.menuSrv.isCollapsed) {
        const sideItemEl = document.querySelector('.ant-menu-item.ant-menu-item-selected');
        if (sideItemEl) {
          // @ts-ignore
          scrollIntoView(sideItemEl, scrollConfig);
        }
      }
    }, 150);
  }

}

export interface PageItem {
  title: string;
  url: string;
}
