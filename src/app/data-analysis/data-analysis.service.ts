import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Level, LevelProperty } from '../classes/level';
import { LevelData, LevelDataProperty } from '../classes/level-data';
import { RequestService } from '../commons/service/request.service';

@Injectable({
  providedIn: 'root'
})
export class DataAnalysisService {

  constructor(
    private requestService: RequestService, 
  ) { }

  public updateData() {
    const that = this;
    const data = [];
    return Promise.all(this.get()).then(rs => {
      const levels = new Level(rs[0] as LevelProperty[]);
      const leveldatas = new LevelData(rs[1] as LevelDataProperty[]);
      return of([levels, leveldatas]).toPromise();
    });
  }

  get(): Promise<object[]>[] {
    const ps = [
      this.requestService.getUrl('Level', ['id', 'name', 'device', 'firsttime', 'lasttime', 'version', 'state']),
      // this.requestService.getUrl('Levelbuy', ['id', 'userid', 'productid', 'buytime', 'expirestime', 'state']),
      this.requestService.getUrl('LevelData', ['id', 'levelid', 'x', 'y', 'time']),
    ];
    return this.requestService._get(ps);
  }
}
