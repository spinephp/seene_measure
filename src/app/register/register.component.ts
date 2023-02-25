import { Component, OnInit, ViewChildren, AfterViewInit, Inject } from '@angular/core';
import { Model } from './model/model';
import { TranslatePipe } from '../translate.pipe';
import { LocalStorage } from '../commons/provider/local-storage';
import { RegisterService } from './register.service';
import { ValuesService } from '../commons/service/values.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '../commons/service/settings.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginerData } from '../classes/loginer';
// import { TabHeadingDirective } from 'ngx-bootstrap';
// import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [TranslatePipe]
})
export class RegisterComponent implements OnInit {
  public languageid: number=0;
  fromLogin: FormGroup;

  constructor(
    private fb:FormBuilder,
    public rs: RegisterService,
    private ls: LocalStorage,
    private vs: ValuesService,
    public cv: SettingsService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private tr: TranslatePipe
  ) {
    const word: {} = {
      'Account': ['账号'],
      'Password': ['密码'],
      'Repassword': ['重置密码'],
      'Email': ['邮箱'],
      'Verify Code': ['验证码'],
      'Forget Password': ['忘记密码'],
      };
    this.cv.addLanguages(word);
    this.fromLogin = this.fb.group({
      account:[""],
      password:[],
      repassword:[],
      email:[],
      verifycode:[]
    })
    this.setType(data);
   }

  @ViewChildren('formLogon') logonInputs: any; // : ElementRef[];
  @ViewChildren('logonButton') logonButtons: any;

  ngOnInit() {
    const that = this;
    this.vs.currentLanguageId().subscribe((value: number) => {
      that.languageid = value;
    });
    // this.rs.model.setActive([0, 1, 2, 3, 4]);
  }

  setType(type: number) {
    this.rs.model.setActive(type);
  }

  // 注册
  logon(): boolean{
    if (!this.rs.validateAll(this.fromLogin)) {
      return false;
    } else {
      // this.logonFormSubmitted = true;
      const that = this;
      this.rs.logon().then((rs: {id:number,type:number,username:string,register:string,email:string,error:string}) => {
        const _type = 'type';
        if (rs.id > -1) {
          [that.successLogon, that.successLogin, that.successResetPassword][rs[_type]](rs, that);
          // that.logonButtons.first.nativeElement.click(); // 关闭登录框
          that.dialogRef.close();
          that.rs.init();
        } else {
          [that.errorLogon, that.errorLogin, that.errorResetPassword][rs[_type]](rs, that);
        }
      });
    }
    return true;
  }
  successLogon(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
    alert(that.tr.transform('Congratulations,') + rs.register + '\n' + rs.email);
  }
  successLogin(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
    // delete rs.type;
    // that.vs.setLoginer(rs);
  }
  successResetPassword(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
  }
  errorLogon(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
    switch (rs.error) {
      case 'Access Denied':
        window.location.reload();
        break;
      case 'Validate Code Error!':
        alert(that.tr.transform('Verify code error, please fill in.'));
        that.rs.resetValidate(that.logonInputs.last.nativeElement);
    }
  }
  errorLogin(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
    switch (rs.error) {
      case 'Access Denied':
        window.location.reload();
        break;
      case 'Validate Code Error!':
        alert(that.tr.transform('Verify code error, please fill in.'));
        that.rs.resetValidate(that.logonInputs.last.nativeElement);
    }
  }
  errorResetPassword(rs:{id:number,type:number,username:string,register:string,email:string,error:string}, that:this) {
    switch (rs.username) {
      case 'Invalid user name!':
        that.rs.model.info[0] = rs.username;
        that.logonInputs._results[0].nativeElement.select();
        break;
      case 'Invalid email':
        that.rs.model.info[3] = rs.username;
        that.logonInputs._results[1].nativeElement.select();
        break;
      case 'Validate Code Error':
        that.rs.model.info[4] = rs.username;
        that.logonInputs._results[2].nativeElement.select();
        break;
      default:
        alert(rs.username);
    }
  }

  closeComponent(){
    this.dialogRef.close()
 }

  hide() {
    this.rs.model.setActive(2);
    // this.logonButtons.first.nativeElement.click(); // 关闭登录框
  }
}

