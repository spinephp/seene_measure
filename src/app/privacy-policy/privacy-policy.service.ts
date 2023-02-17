import { Injectable } from '@angular/core';
import { RequestService } from '../commons/service/request.service';
import { SettingsService } from '../commons/service/settings.service';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {

  constructor(
    private requestService: RequestService,
    private cv: SettingsService,
    ) { }

    setLanguage(language: {}) {
      this.cv.setLanguage(language);
    }

    get(type: string | number) {
      const ps = [
        this.requestService.getUrl(
          'Agreements&type=' + type + '&language=-1',
          [],
        ),
      ];
      return this.requestService._get(ps);
    }
  }
