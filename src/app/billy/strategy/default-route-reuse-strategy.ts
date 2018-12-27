// 缓存时间 秒
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';


export class DefaultRouteReuseStrategy implements RouteReuseStrategy {
  private static CacheRouters: { [key: string]: any } = {};
  private static waitDelete = '';
  private static cacheTime = 60 * 10; // 缓存10分钟
  private static urlTransformReg = /\//g;
  private static urlTransformValue = '_';

  static deleteRouteSnapshot(url: string): void {
    DefaultRouteReuseStrategy.waitDelete = url.replace(DefaultRouteReuseStrategy.urlTransformReg,
      DefaultRouteReuseStrategy.urlTransformValue);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig) {
      return null;
    }
    if (route.routeConfig.loadChildren) {
      return null;
    }
    const name = this.getRouteUrl(route);
    if (this.removeIfNeedCache(name)) {
      return null;
    }
    const curr = DefaultRouteReuseStrategy.CacheRouters[name];
    if (curr) {
      return curr.handle;
    }
    return null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const name = this.getRouteUrl(route);
    if (this.removeIfNeedCache(name)) {
      return false;
    }
    return !!DefaultRouteReuseStrategy.CacheRouters[name];
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.keep;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const name = this.getRouteUrl(route);
    if (this.removeIfNeedCache(name)) {
      return null;
    }
    DefaultRouteReuseStrategy.CacheRouters[name] = {
      snapshot: route,
      handle: handle,
      time: +(Date.now() / 1000)
    };
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(DefaultRouteReuseStrategy.urlTransformReg,
      DefaultRouteReuseStrategy.urlTransformValue);
  }

  private removeIfNeedCache(name: string) {
    // 待删除
    if (DefaultRouteReuseStrategy.waitDelete === name) {
      this.doReMove(name);
      return true;
    }
    const curr = DefaultRouteReuseStrategy.CacheRouters[name];
    // 已超时
    if (curr && (+(Date.now() / 1000) - curr.time >= DefaultRouteReuseStrategy.cacheTime)) {
      this.doReMove(name);
      return true;
    }
    return false;
  }

  private doReMove(name: string) {
    delete DefaultRouteReuseStrategy.CacheRouters[name];
    DefaultRouteReuseStrategy.waitDelete = '';
  }
}
