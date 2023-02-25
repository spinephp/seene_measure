import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../commons/service/values.service';
import { LocalStorage } from '../commons/provider/local-storage';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { TranslatePipe } from '../translate.pipe';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // 创建动画, 动画名称为 slide
    trigger("slide", [
      state('flyin', style({ transform: 'translatex(0)' })),
       transition(':enter', [
      style({ transform: 'translatex(-100%)', position: 'absolute',clip:'rect(0px,0px,430px,0px)'}),
       animate('0.5s 300ms ease-in')
       ]),
       transition(':leave', [
       animate('0.3s ease-out', style({ transform: 'translatex(100%)', position: 'absolute',clip:'rect(0px 220px 430px 0px)' }))
       ])
    //         transition(':enter',[
    //     style({opacity:0}),
    //     animate('500ms',style({opacity:1}))
    //   ]),
    //   transition(':leave',[
    //     animate('300ms',style({opacity:0}))
    //   ])
    ])
  ],
  providers: [TranslatePipe]
})
export class HomeComponent implements OnInit {
  public languageid: number=0;
  title = 'Seene Measure';
  images = ["assets/iphoneb.png","assets/iphonew.png"];
  currentImage = this.images[0];
  index = 0;
  imageIndex:number|null = 0;
  state = 'in';
  
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
      if(that.languageid !== value && !isNaN(value)){
        that.languageid = value;
      }
    });
    this.router.data.subscribe((data: {}) => {
      const sdata = 'data';
      // that.goodsClass = data[sdata][0];
      // that.goods = data[sdata][1];
      // that.news = data[sdata][2];
    });
    setInterval(()=>this.trick(),5000)
  }

    private trick(){
      this.index = (this.index+this.images.length+1) % this.images.length;
      this.imageIndex = null;
      // this.toggleState();
      // this.imageIndex++;
      // if(this.imageIndex===this.images.length) this.imageIndex=0;
      // this.currentImage = this.images[this.imageIndex];
      // this.toggleState();
    }
 
    onDone() {
      this.imageIndex = this.index;
      // if (this.enableAnimation) {
        // if (this.counter === 1) {
          // this.trick();
        // }
        // this.toggleState();
      // }
    }
   
    toggleState() {
      // if (this.counter <2) {
        this.state = this.state === 'in' ? 'out' : 'in';
      //   this.counter++;
      // }
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
