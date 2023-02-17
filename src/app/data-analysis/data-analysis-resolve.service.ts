import { Injectable } from '@angular/core';
import { SettingsService } from '../commons/service/settings.service';
import { DataAnalysisService } from './data-analysis.service';

@Injectable({
  providedIn: 'root'
})
export class DataAnalysisResolveService {

  constructor(
    private cv: SettingsService,
    private das: DataAnalysisService
  ) { }

  resolve(): {} {
    const word: {} = {
      'Seene Meter': ['蘑菇仪表'],
      'Select App': ['选择应用'],
      'Select Time': ['选择时间'],
      'Absolute and relative angles measurement': ['绝对与相对角度测量'],
      'The measured value can be recorded and can be viewed, edited, shared and counted': ['可记录测量值并能对其进行查看、编辑、分享和统计'],
      'Continuous recording and playback of measured values': ['可对测量值连续录制与回放'],
      'Alarm function': ['报警功能'],
      'Three alarm areas can be set: point, line and arc': ['可设置点、线和弧三种报警区域'],
      'There are three alarm modes of sound, light, vibration and note': ['具有声、光、震动和记录本三种报警方式'],
      'Data can be uploaded to the cloud and remotely controlled with couldfield app': ['数据可上传到云端，用云端水平仪 app 进行远程控制'],
      'Download now': ['立即下载'],
      'Version 1.0.0 for Android': ['安卓版 1.0.0'],
      Docs: ['文档']
      };
    this.cv.addLanguages(word);
    
    return this.das.updateData().then(rs => {
      return rs;
    });
  }
}
