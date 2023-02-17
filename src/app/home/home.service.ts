import { PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RequestService } from '../commons/service/request.service';
import { SettingsService } from '../commons/service/settings.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private requestService: RequestService,
    private cv: SettingsService,
    private location: PlatformLocation
  ) {
  }
  setLanguage(language: {}) {
    this.cv.setLanguage(language);
  }

  public updateData() {
    const that = this;
    const data = [];
    return Promise.all([]).then(rs => {
      // const kinds = new Kind(rs[0]);
      // const products = new Product(rs[1]);
      // const news = new News(rs[2]);
      return of([]).toPromise();
    });
  }

  get() {
    const ps = [
      this.requestService.getUrl(
        'ProductClass',
        ['id', 'parentid', 'names', 'introductions'],
      ),
      this.requestService.getUrl(
        'Product',
        ['id', 'classid', 'size', 'picture'],
        [{ field: 'homeshow', value: 'Y', operator: 'eq' }]
      ),
      this.requestService.getUrl(
        'News',
        ['id', 'titles', 'contents', 'time'],
      ),
    ];
    return this.requestService._get(ps);
  }

  // downloadService(): any{
  //   const link = `http://` + this.location.hostname + ':' + this.location.port + `/assets/apks/app1.0.0.apk`;
  //   return this.requestService.get(link, '');
  //   // .map(res => new Blob([res]));
  // }
}
