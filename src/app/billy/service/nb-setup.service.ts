import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {PageService} from './page.service';
import {DefaultRouteReuseStrategy} from '../strategy/default-route-reuse-strategy';

@Injectable({
  providedIn: 'root'
})
export class NbSetupService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleSrv: Title,
    private pageSrv: PageService,
  ) { }
  routerSetup() {
    let url = '';
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        url = route['_routerState'].snapshot.url;
        // console.log(url)
        return route;
      }),
      mergeMap(route => route.data),
    ).subscribe(data => {
      const title = data['title'];
      this.titleSrv.setTitle(title);
      this.pageSrv.pushPage({ title, url, });
    });
  }
}
