import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { of } from 'rxjs';
import { PrivacyPolicyService } from './privacy-policy.service';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyResolveService {

  constructor(
    // private router: Router,
    private cv: SettingsService,
    private ps: PrivacyPolicyService,
    ) {}
  resolve(): {} {
    // 添加要显示的文本，支持国际化
    this.cv.addLanguages({});
    
    // return this.ps.get();
    // .then(rs => {
    //   return rs;
    // });
    return Promise.all(this.ps.get(1)).then(rs => {
    //   return of([]).toPromise();
    // }).then(rs => {
      return rs;
    });
  }
}
