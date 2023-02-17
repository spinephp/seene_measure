import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SettingsService } from '../commons/service/settings.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysisAgreementResolveService {

  constructor(
    private router: Router,
    private cv: SettingsService,
  ) { }
  resolve(): {} {
    const word: {} = {
      'Data analysis service agreement': ['数据分析服务协议'],
      'Important tips': ['重要提示'],
      // tslint:disable-next-line:max-line-length
      'Welcome to use the automatic renewal Commission deduction service (hereinafter referred to as \"data analysis service\" or \"this service\"). In order to protect the rights and interests of paying users (hereinafter referred to as \"paying members\" or \"you\"), please, before using this service,': ['欢迎使用自动续费委托扣款服务（以下简称“数据分析服务”或“本服务”），为了保障付费用户（以下称“付费会员”或“您”）的权益，请在使用本服务之前，'],
      'Read all contents of this service agreement (hereinafter referred to as \"this Agreement\"), especially the bold part. Minors should be accompanied by their legal guardians.': ['详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。未成年人则应在法定监护人陪同下阅读。'],
      'When you open and use this service, you shall be deemed to have read and voluntarily accepted all contents of this service agreement, that is to say, you have reached an agreement with the developer and voluntarily accept all contents of this agreement.': ['您对本服务的开通、使用即视为你已阅读并自愿接受本服务协议的所有内容，即表示已经与开发者达成协议，并自愿接受本协议的所有内容。'],
      'Article 1 acceptance and amendment of service agreement': ['第一条  服务协议的接受和修订'],
      'The content of this agreement includes the main body of the agreement, all kinds of rules that have been published by the developer or may be released / updated in the future. All rules are an integral part of this Agreement and have the same legal effect as the text of the agreement. In case of any conflict between the text of this Agreement and the above rules, the text of this Agreement shall prevail. Unless otherwise explicitly stated, your use of continuous monthly service is subject to this agreement.': ['本协议内容包括协议正文、开发者已经发布的或将来可能发布/更新的各类规则。所有规则均为本协议不可分割的组成部分，与协议正文具有同等法律效力，本协议正文与前述规则存在冲突的，以本协议正文为准。除另行明确声明外，您使用连续包月服务均受本协议约束。'],
      'If this Agreement and the relevant service terms need to be revised due to business development, the developer will announce it on the cloud level platform. You can check the latest version of the terms of the agreement. After the developer modifies the above terms, if you do not accept the modified terms, you can choose to terminate the data analysis service. If you continue to use the service, you will be deemed to have accepted the modified agreement.': ['本协议及相关服务条款如由于业务发展需要进行修订的，开发者将在云水平仪平台公布。您可前往查阅最新版协议条款。在开发者修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用数据分析服务。您继续使用本服务的，将被视为已接受了修改后的协议。'],
      'Article 2 service description': ['第二条  服务说明'],
      'On the premise that you have already opened this service, your irrevocably authorized developer will expire the validity period of paid member,': ['在您已开通本服务的前提下，您不可撤销的授权开发者在付费会员有效期即将过期时，'],
      'Entrust apple (in this agreement, \"apple\" refers to Apple Inc. and its affiliated companies)': ['委托苹果（本协议中“苹果”指Apple Inc.及其关联公司）'],
      'The payment channel is from the': ['支付渠道从您与云水平仪账号绑定的'],
      'Apple ID': ['苹果ID'],
      'The data analysis service fee of the next billing cycle is deducted.': ['中扣取下一个计费周期数据分析服务费。'],
      'Automatic renewal: developer Commission': ['自动续费：开发者委托'],
      // tslint:disable-next-line:object-literal-key-quotes
      'Apple': ['苹果'],
      'The payment channel collects the data analysis service fee of the paying member in the next billing cycle through the account mentioned in Article 2.1, The payment shall be recorded in the payment record of the paying member, and the deduction method for extending the validity period of the paying member shall be correspondingly extended. You need to guarantee': ['支付渠道通过第2.1条所述账户收取付费会员下一计费周期数据分析服务费，并将款项记入付费会员支付记录，同时相应延长付费会员有效期的扣费方式。您需保证'],
      'If the payment channel has successfully deducted from the above account, you shall be responsible for the failure of renewal due to insufficient deductible balance in the above account (including but not limited to the termination of paid member service, inability to participate in paying member activities, etc.).': ['支付渠道从上述账户扣款成功，因上述账户中可扣款余额不足导致的续费失败，由您自行承担责任（包括但不限于付费会员服务终止，无法参加付费会员活动等）。'],
      'If you choose the apple payment channel to enjoy the service, you will be deemed to agree to the apple payment channel to send the deduction instruction, and agree that the apple payment channel can deduct the data analysis service fee of the next billing period from the above account without verifying your account password, payment password, SMS verification code and other information.': ['您选择苹果支付渠道享受本服务，将视为同意苹果支付渠道发出扣款指令，并同意苹果支付渠道可以在不验证您的账户密码、支付密码、短信校验码等信息的情况下从上述账户扣划下一个计费周期的数据分析服务费。'],
      'Article 3 rules for the use of data analysis service fee': ['第三条  数据分析服务费使用规则'],
      'If you open this service, you are deemed to have authorized the cloud level meter to deduct the member fees of a billing cycle from your Apple ID balance when your data analysis service is about to expire. The specific deduction node is 24 hours before the expiration of each billing cycle.': ['如您开通本服务，则视为您授权云水平仪在您的数据分析服务即将到期时，从您的苹果ID余额中代扣一个计费周期的会员费用，具体扣费节点为每个计费周期到期前的24小时。'],
      'If there is an error in the fee deduction process, the developer and you should closely cooperate to find out the causes, and each party should bear the loss caused by its own fault; if the loss is caused by the unequal fault of both parties, both parties shall bear the corresponding responsibility according to the degree of fault; if both parties are jointly responsible, both parties shall share the responsibility.': ['如在扣费过程出现差错，开发者和您应密切配合查明原因，各自承担己方过错造成的损失；若因双方各自存在不均等过错造成的损失，由双方按过错的程度承担相应责任；双方共负责任的，由双方均摊责任。'],
      'After you choose to use this service, unless you choose to terminate the service, your authorization of automatic deduction to developers is irreversible. The fees deducted by developers based on the payment method selected by you when you open the automatic renewal service will not be refunded in any way.': ['您选择使用本服务后，除非您选择终止本服务，否则，您对开发者的自动扣款委托为不可撤销，开发者基于本服务在您开通自动续费服务时选择的支付方式下所扣划的费用，不以任何方式对您所支付的费用予以退还。'],
      'If the price of data analysis service is adjusted before the automatic renewal date, the developer will publicize the modified content on the relevant page before deduction, and deduct according to the current effective price.': ['若在自动续费日之前，数据分析服务价格发生调整，开发者将在扣划之前相关页面公示修改内容，并按现时有效的价格扣划。'],
      'Developers do not charge you any service charge for opening this service, but developers have the right to decide whether to charge or adjust the automatic renewal cycle and fees according to business needs or market changes, and make an announcement on the relevant pages.': ['开发者对您开通本服务不收取任何手续费，但开发者有权根据业务需要或市场变化等原因决定是否进行收费或调整自动续费周期及费用，并在相关页面进行公告。'],
      'The service provided to you by the developer is limited to your use on the cloud level platform. Any use of paid member service by malicious cracking or other illegal means to avoid renewal will constitute a violation of this agreement. All legal consequences caused by this shall be borne by the actor, and the developer shall investigate the legal liability of the actor according to law.': ['开发者向您提供的本服务仅限于您在云水平仪平台使用，任何以恶意破解等非法手段规避续费而使用付费会员服务的，均构成对本协议的违反。由此引起的一切法律后果由行为人负责，开发者将依法追究行为人的法律责任。'],
      'Article 4 suspension, interruption and termination of services': ['第四条  服务中止、中断及终止'],
      'Unless otherwise notified and announced by the developer, this service will be effective for a long time. This Agreement shall come into effect after you choose to accept or use the service until you terminate or cancel the service.': ['除非开发者另有通知、公告，本服务将长期有效。本协议自您选择接受或使用本服务后生效，直至您终止或注销本服务时终止。'],
      'In case of any of the following circumstances, the developer has the right to immediately terminate the service provided to you without any liability to you or any third party:': ['出现下列情况之一的，开发者有权立即终止向您提供服务，且无须为此向您或任何第三方承担责任：'],
      'Confirmed by the effective legal documents of the state administrative or judicial organs that you have illegal or infringing acts, or the developers, according to their own judgment, think that your behavior is suspected of violating the contents of this agreement or the use rules published by the cloud level platform from time to time, or are suspected of violating the provisions of laws and regulations;': ['经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者开发者根据自身的判断，认为您的行为涉嫌违反本协议内容或云水平仪平台不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；'],
      'Your behavior interferes with the normal operation of any part or function of cloud level;': ['您的行为干扰了云水平仪任何部分或功能的正常运行；'],
      'Developers believe that there is a significant risk in providing you with this service.': ['开发者认为向您提供本服务存在重大风险的。'],
      'Developers may choose to terminate, interrupt and terminate the service according to their own business decisions. If this happens, the developer will inform you in the form of an announcement.': ['开发者根据自身商业决策等原因可能会选择中止、中断及中止本服务。如有此等情形发生，开发者会采取公告的形式通知您。'],
      'You have the right to choose to terminate the service in the relevant page of cloud level platform at any time. After termination, the developer will stop providing this service to you.': ['您有权随时在云水平仪平台相关页面中选择终止本服务，终止后，开发者将停止向您提供本服务。'],
      'Termination method:': ['终止方法：'],
      'Please manually turn on iPhone \"Settings\"': ['请手动打开苹果手机“设置”'],
      'Go to \"iTunes Store and app store\"': ['进入“iTunes Store与App Store”'],
      'Click \"Apple ID\", select \"view Apple ID\", enter the \"account settings\" page, click \"subscribe\", select the data analysis of the level instrument and cancel the subscription. If the subscription is not closed at least 24 hours before the end of the subscription period, the subscription will be automatically renewed.': ['点击“Apple ID”，选择查看“查看Apple ID”，进入“账户设置”页面，点击“订阅”，选择运水平仪数据分析取消订阅即可。如未在订阅期结束的至少24小时前关闭订阅，此订阅将会自动续订。'],
      'Before you choose to terminate the service, the instruction that you have entrusted the developer to renew and deduct fees automatically is still valid. Once the deduction is successful, the developer will not refund it and will open the data analysis service for you in the next billing cycle.': ['您在选择终止本服务前已经委托开发者自动续费扣款的指令仍然有效，开发者一旦扣款成功不予退还，并将为您开通下一个计费周期的数据分析服务。'],
      'Article 5 other agreements': ['第五条  其他约定'],
      'Law and dispute resolution: this Agreement shall be governed by the laws of the people\'s Republic of China and shall exclude the application of all conflict of laws provisions.': ['法律与争议解决：本协议适用中华人民共和国的法律，并且排除一切冲突法规定的适用。'],
      'In case of any dispute, you and the developer agree to submit the dispute to China International Economic and Trade Arbitration Commission for arbitration according to its current effective arbitration rules. The arbitration award is final and binding on both parties. The arbitration fee shall be borne by the losing party': ['如出现纠纷，您和开发者一致同意将纠纷提交中国国际经济贸易仲裁委员会根据其现行有效的仲裁规则进行仲裁。仲裁裁决是终局的，对双方都有约束力。仲裁费用由败诉一方承担。'],
      'If the developer fails to exercise, fails to exercise or fully exercise the rights under this agreement or in accordance with the law, it shall not be deemed as a waiver of such rights, nor shall it affect the developer\'s exercise of such rights in the future.': ['开发者不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响开发者在将来行使该权利。'],
      'If you have any questions about the terms, please send an email to our customer service email:（sales@yrr8.com）。': ['如果用户对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：（sales@yrr8.com）。'],
      Developer: ['开发者'],
    };
    this.cv.addLanguages(word);
    return Promise.all([]).then(rs => {
      return of([]).toPromise();
    }).then(rs => {
      return rs;
    });
  }
}
