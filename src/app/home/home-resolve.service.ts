import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolveService {

  constructor(
    private router: Router,
    private cv: SettingsService,
    private hs: HomeService,
    ) { }
  resolve(): {} {
    const word: {} = {
      'Functions and features': ['功能与特点'],
      'The seene measure is a relative size measurement app that supports Android, iPhone and iPad:': ['蘑菇测量是一款支持安卓、iPhone 和 iPad 的相对尺寸测量 app:'],
      'Relative dimension measurement and dimensioning': ['相对尺寸测量与标注'],
      'Scanner': ['扫描仪'],
      'Measurement object extraction and editing': ['测量物体提取与编辑'],
      'Can import png files, png format data in the cutting board and parts in other measurement files': ['可导入png文件、裁剪板中的png格式数据和其它测量文件中的部件'],
     'Download now': ['立即下载'],
      'Version 1.0.0 for Android': ['安卓版 1.0.0'],
      Docs: ['文档']
      };
    this.cv.addLanguages(word);
    return this.hs.updateData().then(rs => {
      return rs;
    });
  }
}
