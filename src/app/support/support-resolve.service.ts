import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportResolveService {

  constructor(
    private router: Router,
    private cv: SettingsService,
    ) {}
  resolve(): {} {
    const word: {} = {
      'IOS technical support': ['iOS技术支持'],
      'Dear users': ['亲爱的用户'],
      // tslint:disable-next-line:max-line-length
      'If you encounter any problems when using our products, please feel free to contact us and we will try our best to solve them for you': ['如果您在使用我们的产品时遇到任何问题，请随时与我们联系，我们将全力全意为您解决'],
      'Please contact us by email, we will serve you 24 hours': ['请发邮件与我们联系，我们将24小时为您服务'],
      Email: ['邮箱'],
      Url: ['网址'],
      'Thank you': ['谢谢'],
    };
    this.cv.addLanguages(word);
    return Promise.all([]).then(rs => {
      return of([]).toPromise();
    }).then(rs => {
      return rs;
    });
  }
}
