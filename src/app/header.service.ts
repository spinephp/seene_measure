import { Injectable } from '@angular/core';
import {RequestService} from './commons/service/request.service';
import {SettingsService} from './commons/service/settings.service';
import { of } from 'rxjs';
import { Language, LanguageData } from './classes/language';
// import { isDefined } from '@angular/compiler/src/util';
import { Company, CompanyData } from './classes/company';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private requestService: RequestService, private cv: SettingsService) {
    cv.setLanguage({});
  }
  heart(): Promise<object> {
    return this.requestService.get(this.cv.baseUrl + '?cmd=IsLogin', undefined)
    .then((res: any) => {
      return res;
    }, (res: any) => {
      return res;
    });
  }

  public async updateData() {
    const that = this;
    const data = [];
    const rs = await Promise.all(this.get());
    const companys = new Company(rs[0] as CompanyData[]);
    const languages = new Language(rs[1] as LanguageData[]);
    return await of([companys, languages]).toPromise();
  }

  get(): Promise<object[]>[] {
    const ps = [
      this.requestService.getUrl('Qiye', ['id', 'names', 'addresses', 'tel', 'fax', 'email', 'qq', 'domain', 'icp']),
      this.requestService.getUrl('Language', ['id', 'names']),
    ];
    return this.requestService._get(ps);
  }

  async logon(param: any) {
    const rs = await this.requestService.post('/woo/index.php?cmd=Custom', JSON.stringify(param));
    return rs;
  }

  async logout(param: { user: string; action: string; token: string; }) {
    const rs = await this.requestService.post('/woo/index.php?cmd=Logout', JSON.stringify(param));
    return rs;
  }
  // makeRequestParam(formEl, tables: string[], heads, curtabs): any {
  // // #opt = $(e.target)
  //   const key = $(formEl).serializeArray();
    
  //   const item = {token: this.cv.sessionid};
  //   for (const table of tables) {
  //     item[table] = {} ;
  //   }
  //   for (const field of key) {
  //     const head = field.name.slice(0, 1);
  //     const ckey = field.name.slice(2);
  //     // const cval = $.trim(field.value);
  //     const cval = field.value.trim();
  //     if (cval !== '') {
  //       // const i = $.inArray(head, heads.indexOf(head));
  //       const i = heads.indexOf(head);
  //       if (i > -1) {
  //         if (curtabs!=undefined && curtabs[i][ckey] === cval) {
  //           item[tables[i]][ckey] = cval;
  //         }
  //       } else {
  //         item[field.name] = cval;
  //       }
  //     }
  //   }
  //   return item;
  // }
}
