import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorage } from '../commons/provider/local-storage';
import { ValuesService } from '../commons/service/values.service';
import { TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  providers: [TranslatePipe]
})
export class PrivacyPolicyComponent implements OnInit {
  // title = 'Seene Meter';
  public languageid: number=0;
  public privacys!: any[];
  public privacy: any;
  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
    private router: ActivatedRoute,
  ) {
    // this.languageid = 0;
   }

  ngOnInit(): void {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    // this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      if(that.languageid !== value &&!isNaN(value)){
        that.languageid = value;
        that.privacy = that.privacys[value];
      }
    });

    this.router.params.subscribe((params: Params) => {
      const param = 'languageid';
      const lid = params[param];
      console.log("url params: %s",JSON.stringify(params));
      if (lid !== undefined) {
        that.languageid = lid === '1' ? 1 : 0;
        that.vs.setLanguageId(that.languageid);
        this.ls.set("languageid",that.languageid);
        console.log("languageid: %d",that.languageid);
      }else{
        that.vs.setLanguageId(+that.ls.get("languageid"));
      }
    });

    // 订阅路由守护取得的数据
    this.router.data.subscribe((data: any) => {
      const sdata = 'data';
      that.privacys = data[sdata][0][sdata];
      that.privacy = that.privacys[that.languageid];
      // console.log("url data: %s",JSON.stringify(data));
    });
  }

}
