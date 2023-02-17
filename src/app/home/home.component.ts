import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../commons/service/values.service';
import { LocalStorage } from '../commons/provider/local-storage';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TranslatePipe]
})
export class HomeComponent implements OnInit {
  public languageid: number=0;
  title = 'Seene Meter';

  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
    private hs: HomeService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    // this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      that.languageid = value;
    });
    this.router.data.subscribe((data: {}) => {
      const sdata = 'data';
      // that.goodsClass = data[sdata][0];
      // that.goods = data[sdata][1];
      // that.news = data[sdata][2];
    });
  }

  // downloadComponent(): void {
  //   const link = document.createElement('a');
  //   this.hs.downloadService()
  //   .subscribe(data => this.downloadFile(data));
  //   // .subscribe(data => {
  //   //   link.setAttribute('href', window.URL.createObjectURL(data));
  //   //   link.setAttribute('download', 'seenemeter.apk');
  //   //   link.style.visibility = 'hidden';
  //   //   document.body.appendChild(link);
  //   //   link.click();
  //   //   document.body.removeChild(link);
  //   // });
  // }
  // downloadFile(data: any){
  //   const blob = new Blob([data], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //   window.open(url);
  // }
  }
