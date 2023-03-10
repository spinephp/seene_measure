import { Component, ChangeDetectorRef } from '@angular/core';
import { LocalStorage } from './commons/provider/local-storage';
import { ValuesService } from './commons/service/values.service';
import { SettingsService } from './commons/service/settings.service';
import { TranslatePipe } from './translate.pipe';
import { ALoginer, LoginerData } from './classes/loginer';
import { HeaderService } from './header.service';
import { ALanguage } from './classes/language';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslatePipe]
})
export class AppComponent {
  public languageid: number=0;
  public aLoginer: ALoginer;
  public languages?:[{id:string,names:[string]}];
  public rooturl: string;
  public cdate: Date;
  constructor(
    private cdr: ChangeDetectorRef,
    private headerService: HeaderService,
    private ls: LocalStorage,
    private vs: ValuesService,
    private ss: SettingsService,
    private tr: TranslatePipe,
    public dialog: MatDialog
  ) {
    this.rooturl = ss.rootUrl;
    this.aLoginer = new ALoginer(undefined);
    this.languageid = 0;
    this.cdate = new Date();
  }
  // title = 'Seene Meter';
  logined = false;
  logtext = 'Login';
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    // this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      if(that.languageid !== value && !isNaN(value)){
        that.languageid = value;
      }
      // that.cdr.detectChanges();
      // console.log("===languageid %d", value);
    });
    this.vs.currentLoginer().subscribe((value: LoginerData) => {
      if (value === undefined || value === null) {
        that.logined = false;
        that.logtext = 'Sign in';
        that.aLoginer = new ALoginer(undefined);
      } else { // ????????????
        that.logined = true;
        that.logtext = 'Sign out';
        that.aLoginer = new ALoginer(value);
      }
    });
    this.headerService.heart().then(res => {
      const sok = 'ok';
      const sdata = 'data';
      if (res[sok as keyof typeof res] === true) {
        const _res = res[sdata as keyof typeof res];
        const item = _res[0] as {login:boolean,sessionid:string,token:string};
        that.ls.set('publickey', item.token);
        that.ls.set('sessionid', item.sessionid);
        that.ss.sessionid = item.sessionid;
      } else {
        const serror = 'error';
        console.log(res[serror as keyof typeof res]);
        that.ss.sessionid = that.ls.get('sessionid');
      }
      // that.languages = [
      //   {id: '1', names: ['english', '??????']},
      //   {id: '2', names: ['chinese', '??????']},
      // ];
      Promise.all(this.headerService.get()).then(rs => {
        // console.log(JSON.stringify(rs));
        const sqq = 'qq';
        if (rs[1] !== undefined) {
          that.languages = rs[1] as [{id:string,names:[string]}];
          // console.log(JSON.stringify(rs[1]));
        }
        that.ls.set(sqq, rs[0][0][sqq as keyof typeof rs[0][0]]);
        // const lid = that.ls.get('languageid') || 1;
        // that.selectChangeLanguage(lid);
      });
  });

  }

  openDialog(logon: number): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      data: logon,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // ?????????????????????
  selectChangeLanguage(id: number) {
    this.ls.set('languageid', id); // ????????????????????? local storage
    this.vs.setLanguageId(id); // ????????????????????????
  }

  logout() {
    const that = this;
    // ??????
    if (this.logined && this.aLoginer!=undefined && +this.aLoginer.item!.id > 0) {
      const param = {
        user: this.aLoginer.item!.name,
        action: 'custom_logout',
        token: this.ls.get('sessionid')
      };
      this.headerService.logout(param).then((rs: LoginerData) => {
        if (+rs.id >= 0) {
          that.vs.setLoginer(undefined );
        }
      });
    } else {
      // ?????????
    }
  }

  ngDestroy() {
    this.ls.set('languageid', this.languageid);
  }
}
