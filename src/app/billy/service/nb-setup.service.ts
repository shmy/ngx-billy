import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NbSetupService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleSrv: Title,
  ) { }
  routerSetup() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
    ).subscribe(event => {
      this.titleSrv.setTitle(event['title']);
    });
  }
}
