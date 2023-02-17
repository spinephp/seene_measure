import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValuesService } from '../commons/service/values.service';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent implements OnInit {
  public languageid: number=0;
  public apps = ["Seene Meter","Seene Meter1"];
  // public currentApp: string;
  public appIndex: number;
  range: UntypedFormGroup;
  constructor(
    private vs: ValuesService,
    private router: ActivatedRoute,

  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.range = new UntypedFormGroup({
      start: new UntypedFormControl(new Date(year, month, 13)),
      end: new UntypedFormControl(new Date(year, month, 13)),
    });
    // this.currentApp = this.apps[0];
    this.appIndex = 0;
   }

  ngOnInit(): void {
    const that = this;
    this.vs.currentLanguageId().subscribe((value: number) => {
      if(that.languageid !== value){
        that.languageid = value;
      }
    });

    this.router.data.subscribe((data: {}) => {
      const sdata = 'data';
      // that.goodsClass = data[sdata][0];
      // that.goods = data[sdata][1];
      // that.news = data[sdata][2];
    });

  }

  /// 选择应用
  /// 参数 i - number 类型，指定要选择的 app 索引
  // selectApp(i: number){
  //   this.currentApp = this.router[i];
  // }
}
