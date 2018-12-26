import {Injectable} from '@angular/core';
import find from 'lodash/find';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  readonly pages: PageItem[] = [];

  constructor() {
  }

  pushPage(page: PageItem) {
    if (!find(this.pages, page)) {
      this.pages.push(page);
    }
  }

}

export interface PageItem {
  name: string;
  path: string;
}
