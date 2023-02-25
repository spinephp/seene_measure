import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorage } from '../commons/provider/local-storage';
import { ValuesService } from '../commons/service/values.service';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss']
})
export class UserAgreementComponent implements OnInit {
  public languageid: number=0;
  public agreements: any[] = [];
  public agreement: any;

  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
    private router: ActivatedRoute,
  ) {
    this.languageid = 0;
  }

  ngOnInit(): void {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    // this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      if(that.languageid !== value && !isNaN(value)){
        that.languageid = +value;
        that.agreement = that.agreements[value];
      }
    });

    this.router.params.subscribe((params: Params) => {
      const param = 'languageid';
      const lid = params[param];
      if (lid !== undefined) {
        that.languageid = lid === '1' ? 1 : 0;
        this.vs.setLanguageId(this.languageid);
        this.ls.set("languageid",that.languageid);
      }else{
        that.vs.setLanguageId(+that.ls.get("languageid"));

      }
    });
    this.router.data.subscribe((data: any) => {
      const sdata = 'data';
      that.agreements = data[sdata][0][sdata];
      that.agreement = that.agreements[that.languageid];
    });
  }
}
