import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../commons/provider/local-storage';
import { ValuesService } from '../commons/service/values.service';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  providers: [TranslatePipe]
})
export class SupportComponent implements OnInit {
  public languageid!: number;

  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
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
    });
  }

}
