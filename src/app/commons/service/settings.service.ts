import { Injectable } from '@angular/core';
import {LocalStorage} from '../provider/local-storage';
// import { isFunction } from 'util';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private xdatas = {};
  private xlanguages: Subject<{}> = new Subject<{}>();
  public languages;
  constructor(private ls: LocalStorage) { }
  // rootUrl = 'http://www.yrr8.com/woo/';
  // rootUrl = 'http://127.0.0.1/woo/';
  // rootUrl = 'http://192.168.1.107/woo/'; // 服务器无线
  rootUrl = 'http://192.168.1.22/woo/';  // 服务器有线
  // rootUrl = 'http://192.168.1.30/woo/';  // 服务器有线
  baseUrl = this.rootUrl + 'index.php';
  imgUrl = this.rootUrl + 'images/';
  sessionid = this.ls.get('sessionid') || '';
  language0: {} = {// 页眉
    'Seene Meter': ['蘑菇仪表'],
    'Seene meter': ['蘑菇仪表'],
    'seend meter': ['蘑菇仪表'],
    Language: ['语言'],
    'Sign in': ['登录'],
    'Sign out': ['退出登录'],
    'Sign up': ['注册'],
    'Reset password': ['重置密码'],
    Submit: ['提交'],
    Cancel: ['取消'],
    'Privacy Policy': ['隐私条款'],
    Home: ['首页'],
    Support: ['技术支持'],
    'User service agreement': ['用户服务协议'],
    'Data analysis service agreement': ['数据分析服务协议'],
    'Data analysis': ['数据分析'],
    'Message push': ['消息推送'],
    Copyright: ['版权所有'],
    'All rights reserved': ['保留所有权利'],
    'A combined': ['合计'],
    'Order settlement': ['订单结算'],

    // 注册对话框
    'Enter user name': ['请输入用户名'],
    'Password format error': ['密码格式错误'],
    'User name already exists': ['用户名已存在'],
    'Email format error': ['邮箱格式错误'],
    'Invalid phone number': ['无效的手机号码'],
    'Invalid telephone number': ['无效的电话号码'],
    'Invalid user name': ['无效的用户名'],
    'User name can not be empty': ['用户名不能为空'],
    'User name cannot begin with a number': ['用户名不能以数字开头'],
    'Valid length 6-18 characters': ['合法长度为6-18个字符'],
    'The user name can only contain _, English letters, numbers': ['用户名只能包含_,英文字母,数字'],
    'User name can only be the end of the English letters or numbers': ['用户名只能英文字母或数字结尾'],
    'The two passwords you typed are not consistent. \n please re-enter.': ['分别键入的两个密码不一致!\n请重新输入。'],
    'Error form submission, please try again later': ['表单提交出错，请稍候再试'],
    'Congratulations,': ['恭喜您，'],
    'Verify code error, please fill in.': ['验证码错误，请重新填写。'],
    Pass: ['通过'],
    Reply: ['回复']
    };
  public addLanguages(langs: {}): void {
    this.languages = Object.assign(langs, this.languages);
    this.xlanguages.next(this.languages);
  }

  public getLanguages(): Observable<{}> {
      return this.xlanguages.asObservable();
  }
  setLanguage = function(language: {}) {
    this.languages = Object.assign(language, this.language0);
  };
  getLanguage = function(): {} {
    return this.languages;
  };
  set = function(name: string, value: any) {
    this.xdatas[name] = value;
  };
  get = function(name: string) {
    return this.xdatas[name];
  };
  delete = function(name: string) {
    if (this._datas[name]) {
      delete this.xdatas[name];
    }
  };
}
