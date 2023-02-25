import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SettingsService} from './settings.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private options: any;
  constructor(private http: HttpClient, private ss: SettingsService) {
    const header: any = new Headers();
    // header.append('Access-Control-Allow-Origin', '*'); // 允许跨域
    // header.append('Access-Control-Allow-Credentials', true); // 允许 cookie
    this.options = new HttpHeaders({headers: header});
}

  /**
   * 统一发送请求
   * @param params 参数
   * @returns Promise<{success: boolean, msg: string}>|Promise<R>  返回数据
   */
//  public request(params: any): any {
//       if (params['method'] === 'post' || params['method'] === 'POST') {
//         return this.post(params['url'], params['data']);
//       } else {
//         return this.get(params['url'], params['data']);
//       }
//     }

  getUrl(cmd: string, filter: string[], condition?: object[]) {
    const data = {token: this.ss.sessionid, filter: '', cond: ''};
    const url = {cmdkey:data};
    const cmdstr = `?cmd=${cmd}`;
    if (filter && filter.length > 0) {
      data.filter = JSON.stringify(filter);
    }
    if (condition && condition.length > 0) {
      data.cond = JSON.stringify(condition);
    }
    url[cmdstr as keyof typeof url] = data;
    return url;
  }

  _get(param: {}[]) {
    function success(data: any) {
      return data;
    }

    function error(err:string) {
      alert('error occured!\n' + err);
    }
    const promises = [];
    for (const i of Object.keys(param)) {
      const ii = i as keyof typeof param;
      const itype = param[ii];
      for (const k of Object.keys(itype)) {
        if(k==='cmdkey') continue;
        promises.push(this.get(this.ss.baseUrl + k, param[ii][k as keyof typeof itype]).then(success, error));
      }
    }
    return promises;
  }

  /**
   * get 请求
   * @param url 接口地址
   * @param params 参数
   * @returns Promise<R>|Promise<U> 返回数据
   */
  public get(url: string, params: any): any {
    return  lastValueFrom(this.http.get(url, {params}))
      .then(res => this.handleSuccess(res))
      .catch(res => this.handleError(res));
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns Promise<R>|Promise<U> 返回数据
   */
  public async post(url: string, params: any) {
    try {
      const res = await lastValueFrom(this.http.post(url, params, this.options));
        // .toPromise();
      return this.handleSuccess(res);
    } catch (res_1) {
      return await this.handleError(res_1);
    }
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns Promise<R>|Promise<U> 返回数据
   */
  public async put(url: string, params: any) {
    try {
      const res = await lastValueFrom(this.http.post(url, params, this.options));
        // .toPromise();
      return this.handleSuccess(res);
    } catch (res_1) {
      return await this.handleError(res_1);
    }
  }

  /**
   * 处理请求成功
   * @param res  参数
   * @returns data:(string|null|((node:any)=>any) 返回数据
   */
  private handleSuccess(value: any) {
      return value;
  }

  /**
   * 处理请求错误   // tslint:disable-next-line:no-redundant-jsdoc
   * @param error  参数
   * @returns void|Promise<string>|Promise<T>|any  返回数据
   */
  private handleError(error: any): Promise<any> {
    // console.log(error);
    // const msg = '请求失败';
    // if (error.status === 400) {
    //   console.log('请求参数正确');
    // }
    // if (error.status === 404) {

    //   console.error('请检查路径是否正确');
    // }
    // if (error.status === 500) {
    //   console.error('请求的服务器错误');
    // }
    return Promise.reject({success: false, error: error.message});

  }
}
