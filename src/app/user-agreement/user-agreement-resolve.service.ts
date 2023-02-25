import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { of } from 'rxjs';
import { PrivacyPolicyService } from '../privacy-policy/privacy-policy.service';

@Injectable({
  providedIn: 'root'
})
export class UserAgreementResolveService {

  constructor(
    private router: Router,
    private cv: SettingsService,
    private ps: PrivacyPolicyService,
  ) { }
  resolve(): {} {
    // const word: {} = {
    //   'User service agreement': ['用户服务协议'],
    //   'Important note:': ['重要须知：'],
    //   // tslint:disable-next-line:max-line-length
    //   'This user service agreement (hereinafter referred to as \"this Agreement\") is the user service agreement for you (individual, company, or other organization) to use the software. You are specially reminded to carefully read the terms of this agreement, including but not limited to the user\'s instructions, legal liability and exemption. Your installation and use will be deemed as acceptance of this agreement. By installing or using the software in any way, you agree to be bound by this agreement. If you do not agree with the terms of this agreement, you will not have the right to install and use the software.': ['本《用户服务协议》（以下简称\“本协议\”）是您（个人、公司、或其他组织）使用本软件的用户服务协议。 在此特别提示您仔细阅读本协议中各条款，包括但不限于用户使用须知、法律责任与免责等。您的安装、使用行为将视为接受本协议。一旦安装或以任何方式使用本软件，即表示您已同意接受本协议的约束。如果您不同意本协议的条款，则不能获得安装、使用本软件的权利。本协议是您下载、安装、使用本软件所订立的协议。本协议约定与您关于本软件使用许可方面的权利义务。'],
    //   'This agreement is made by you to download, install and use the software. This agreement stipulates your rights and obligations with respect to the use license of the software.': ['本协议由您下载、安装和使用本软件。本协议规定了您对软件使用许可的权利和义务。'],
    //   'Statement of intellectual property rights': ['知识产权声明'],
    //   'This software is licensed by the developer. The intellectual property rights of the software and all information content related to the software, including but not limited to: text expression and its combination, icon, graphic decoration, chart, color, interface design, layout framework, relevant data, printing materials, electronic documents, etc., are protected by copyright law, international copyright treaties and other intellectual property laws and regulations, and their intellectual property rights belong to Developer owned.': ['本软件由开发者许可。本软件的知识产权以及与本软件相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图表、色彩、界面设计、版面框架、有关数据、印刷材料、电子文档等，均受著作权法和国际著作权条约以及其他知识产权法律、法规的保护，其知识产权均归开发者所有。'],
    //   'Software licensing': ['软件的许可'],
    //   'All other rights not expressly authorized in this agreement belong to the developer. If you need to use any other rights not granted in this agreement, you must obtain the written consent of the developer.': ['本协议未明示授权的其他一切权利均归开发者所有，如果您需要使用本协议未授予的任何其他权利，须另行取得开发者的书面同意。'],
    //   'If you use the application services of a third party through the software, you should sign a separate service agreement with the third party.': ['您通过本软件使用第三方的应用服务，应另行与该第三方签订服务协议。'],
    //   'You should license, but not limit, access to third-party apps through the links in the software': ['您应许可但不限定通过本软件中的链接访问第三方App.'],
    //   'The developer allows you to download, install and run the software on your mobile phone. The license is limited, non transferable, non sublicensable, revocable, non exclusive and non exclusive.': ['开发者许可您在手机上下载、安装、运行本软件。该许可是有限的、不可转让的、不可分许可的、可撤销的、非独占的、非排他的。'],
    //   'Restrictions on use': ['使用限制'],
    //   'You may use the software in accordance with this Agreement on the premise of complying with national laws, regulations, policies and this agreement. You have no right or right to perform the following actions, including but not limited to:': ['您在遵守国家法律、法规、政策及本协议的前提下，可依本协议使用本软件。您无权也不得实施包括但不限于下列行为：'],
    //   'Delete any copyright notice or prompt and any other information and content in the software.': ['删除本软件中的任何版权申明或提示以及任何其他信息、内容。'],
    //   'Reverse engineer, reverse assemble and reverse compile the software.': ['对本软件进行反向工程、反向汇编、反向编译等。'],
    //   'Use, copy, modify, lease or transfer the software or any part of the software beyond the terms of this agreement.': ['在本协议规定的条款之外，使用、复制、修改、租赁或转让本软件或其中的任一部份。'],
    //   'Provide the software to a third party, license others to use the software or use the software for the purpose of licensing others to use the software or use the software for the purpose prohibited by developers (such as commercial purpose, etc.).': ['向第三人提供本软件，许可他人使用本软件或将本软件用于开发者禁止的目的（如商业目的等）。'],
    //   'Unauthorized implementation of image, text and other related information of the software includes but is not limited to the following acts: use, copy, modify, link, reprint, assemble, publish, publish, establish image site, develop derivative products, works and services related to the software with the help of the software.': ['对本软件的图像、文字等相关信息，擅自实施包括但不限于下列行为：使用、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点、擅自借助本软件发展与之有关的衍生产品、作品及服务等。'],
    //   'Use this software to store, publish and disseminate content in violation of national laws, regulations and policies.': ['利用本软件储存、发表、传播违反国家法律、法规以及国家政策规定的内容。'],
    //   'Use this software to store, publish and disseminate the content infringing other\'s intellectual property rights, trade secrets and other legitimate rights.': ['利用本软件储存、发表、传播侵害他人知识产权、商业秘密等合法权利的内容。'],
    //   'Conduct behaviors endangering computer network security.': ['进行危害计算机网络安全的行为。'],
    //   'Suspension and termination of services': ['服务的中止与终止'],
    //   'If you publish illegal information, seriously violate social morality and other laws, the developer has the right to terminate the service immediately.': ['如果您存在发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，开发者有权立即终止对您提供服务。'],
    //   'If you violate Article 5 of this Agreement and other developer service terms, end-user license agreement and privacy policy when accepting party A\'s services, the developer has the right to terminate the services provided to you.': ['如果您在接受甲方服务时违反本协议第5条使用限制及其他开发者服务条款、最终用户许可协议、隐私政策的，开发者有权终止对您提供服务。'],
    //   'If you provide false registered identity information or violate this agreement, the developer has the right to suspend all or part of the services provided to you within a reasonable period; the developer will notify you and inform you of the suspension period when taking the suspension measures, and the developer will resume the services to you in a timely manner after the expiration of the suspension period.': ['如果您提供虚假注册身份信息，或实施违反本协议的行为，开发者有权在合理期间内中止对您提供全部或部分服务；开发者在采取中止措施时将通知您并告知中止期间，中止期间届满后开发者将及时恢复对您的服务。'],
    //   'If the developer suspends or terminates providing part or all of the services to you in accordance with this article, it will bear the corresponding burden of proof.': ['开发者根据本条约定中止或终止对您提供部分或全部服务的，将承担相应举证责任。'],
    //   'Technical support': ['技术支持'],
    //   // tslint:disable-next-line:max-line-length
    //   'Under this agreement, the developer does not provide any technical support services for the software.': ['本协议下，开发者不提供关于本软件的任何技术支持服务。'],
    //   'Version upgrade': ['版本升级'],
    //   'It is up to the developer to decide whether to provide an upgraded version of the software in the future. If the software is upgraded with the consent of the developer, unless there is an alternative software license agreement for the upgraded version, the upgraded version still applies to this agreement. If the software is marked as upgraded, you must comply with this agreement.': ['本软件将来是否提供升级版本将由开发者决定。如果本软件经开发者同意升级，除非升级版本有替代的软件许可协议，否则升级版本仍适用本协议。如果该软件标明为升级版本，您必须遵守本协议。'],
    //   'Legal liability': ['法律责任'],
    //   'You agree to use the software at your own risk.': ['您同意，使用本软件的风险由您自行承担。'],
    //   'You agree that the software may be disturbed by various security issues, such as other people\'s use of your data, causing real-life harassment. The downloaded and installed software contains Trojan horse and other viruses, which threaten the security of your information and data, and then affect the normal use of the software and so on. You should strengthen the awareness of information security and protection of information resources, and pay attention to password protection to avoid loss and harassment.': ['您认可，本软件可能受到各种安全问题的侵扰，如他人利用您的资料，造成现实生活中的骚扰。下载安装的软件中含有“特洛伊木马”等病毒，威胁到您的信息和数据的安全，继而影响本软件的正常使用等等。您应加强信息安全及信息资源的保护意识，要注意加强密码保护，以免遭致损失和骚扰。'],
    //   'This software is licensed \"as is.\". The developer does not provide any express or implied warranties and guarantees on the software, including no express or implied warranties on the marketability and specific use of the software, and the developer does not make any warranties on the non infringement of the rights of third parties.': ['本软件按“原样”授予许可。开发者就本软件不提供任何明示的或默示的担保和保证，包括不对本软件的适销性、特定用途做任何明示或默示的保证，开发者不就不侵犯第三方权利作任何保证。'],
    //   'To the maximum extent permitted by applicable law, the developer shall not be liable for any direct, indirect, accidental, special, punitive or other damages (including but not limited to those caused by personal injury or property damage) caused by or related to the use or inability to use the software;': ['在适用法律所允许的最大范围内，开发者绝不就因使用或不能使用本软件所引起的或有关的任何直接的、间接的、意外的、特殊的、惩罚性的或其它任何损害（包括但不限于因人身伤害或财产损坏而造成的损害赔偿，因利润损失、营业中断、商业信息的遗失而造成的损害赔偿，因未能履行包括诚信或相当注意在内的任何责任致使隐私泄露而造成的损害赔偿，因疏忽而造成的损害赔偿，或因任何金钱上的损失或任何其它损失而造成的损害赔偿）承担赔偿责任，即使开发者事先被告知该损害发生的可能性。开发者承担的所有责任以您购买本软件所支付的价款为限。本条款在任何情况下都将有效。'],
    //   'Any other software derived from the software without the authorization of the developer is illegal. Downloading, installing and using such software may lead to unpredictable risks. It is recommended that you do not download, install and use such software easily. All losses, damages, legal liabilities and disputes arising therefrom shall be borne by you and have nothing to do with developers.': ['非经开发者授权的其它任何由本软件衍生的软件，均属非法。下载、安装、使用此类软件，将可能导致不可预知的风险，建议您不要轻易下载、安装、使用，由此产生的一切损失、损害以及法律责任与纠纷将由您承担责任，与开发者无关。'],
    //   'You shall be fully responsible for all liabilities caused by your violation of the law or breach of this agreement. If the developer suffers losses, the developer has the right to claim full compensation from you.': ['对于您违法或违反本协议而引起的一切责任，由您负全部责任，若导致开发者损失的，开发者有权要求您全额赔偿。'],
    //   'Lapse of a right': ['权利终止'],
    //   'Developer shall have the right to terminate or terminate this agreement at any time. After the termination of this agreement, you must immediately stop using the software and delete all software and related materials that have been copied and installed.': ['开发者有权随时中止或终止本协议。本协议终止后，您必须立即停止使用本软件，删除已经复制、安装的所有软件及相关资料。'],
    //   'Network security and privacy protection': ['网络安全与隐私保护'],
    //   'Based on the basic principle of protecting user\'s personal information, developers will take reasonable measures to protect your personal information. Unless otherwise stipulated by laws and regulations, developers will not disclose users\' personal information to third parties without your permission. Developers use professional encryption storage and transmission mode for relevant information to ensure the safety of users\' personal information. You need to provide some necessary information in the process of registering account or using this service. For example, in order to provide you with account registration service or user identification, you need to fill in your mobile phone number or email address; the function of nearby people requires you to agree to use your geographic location information; the function of recommending contact friends to me and adding friends from contacts needs your authorization Access to mobile phone address book, etc. Developer account users can search for you by mobile phone number or email address, and view your avatar, nickname and region information. You can also turn off the corresponding search switch in the settings of the developer account to avoid being found by new friends. If the national laws and regulations or policies have special provisions, you need to provide real identity information. If you do not provide the information in full, you cannot use it. Your initial registration information can not be modified due to the security of your initial registration, but you can\'t provide any other information for verification and modification at any time. Developers will use a variety of security technologies and procedures to establish a sound management system to protect': ['基于保护用户个人信息的基本原则，开发者将会采取合理的措施保护您的个人信息。除法律法规规定的情形外，未经您的许可开发者不会向第三方公开、透露用户个人信息。开发者对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。你在注册帐号或使用本服务的过程中，需要提供一些必要的信息，例如：为向你提供帐号注册服务或进行用户身份识别，需要你填写手机号码或邮件地址；附近的人功能需要你同意使用你所在的地理位置信息；向我推荐联系人好友、从联系人添加好友功能需要你授权访问手机通讯录等。开发者帐号用户可以通过手机号码或邮件地址搜索到您，并可查看您的头像、昵称和地区信息。您也可以在开发者 帐号的设置中关闭对应的搜索开关，以不被新朋友查找到。若国家法律法规或政策有特殊规定的，你需要提供真实的身份信息。若你提供的信息不完整，则无法使用本服务或在使用过程中受到限制。一般情况下，你可随时浏览、修改自己提交的信息，但出于安全性和身份识别的考虑，你无法修改注册时提供的初始注册信息及其他验证信息。开发者将运用各种安全技术和程序建立完善的管理制度来保护你的个人信息，以免遭受未经授权的访问、使用或披露。未经你的同意，开发者不会向开发者以外的任何公司、组织和个人披露你的个人信息，但下列情况除外：'],
    //   'You or your guardian authorized the developer to disclose;': ['您或您的监护人授权开发者披露的；'],
    //   'The developer is required by relevant laws to disclose;': ['有关法律要求开发者披露的；'],
    //   'Provided by the developer as required by the judicial or administrative authorities based on legal procedures;': ['司法机关或行政机关基于法定程序要求开发者提供的；'],
    //   'When the developer brings a lawsuit or arbitration to Party B in order to protect his legal rights and interests;': ['开发者为了维护自己合法权益而向乙方提起诉讼或者仲裁时；'],
    //   'When providing your personal identity information at the legal request of your guardian.': ['应您的监护人的合法要求而提供您的个人身份信息时。'],
    //   'Other clauses': ['其他条款'],
    //   'The invalidity of any provision of this agreement in part or in whole shall not affect the validity of other provisions.': ['本协议任何条款的部分或全部无效，不影响其它条款的效力。'],
    //   'The interpretation, validity and dispute settlement of this Agreement shall be governed by the laws of the people\'s Republic of China. Any dispute or dispute arising from this Agreement shall be settled through friendly negotiation. If negotiation fails, you hereby fully agree to submit the dispute or dispute to Lianyungang Arbitration Commission for arbitration. The arbitration award is final and binding on both parties. All costs of arbitration shall be borne by the losing party.': ['本协议的解释、效力及纠纷的解决，适用于中华人民共和国法律。因本协议发生任何纠纷或争议，首先应友好协商解决，协商不成的，您在此完全同意将纠纷或争议提交连云港市仲裁委员会仲裁裁决，仲裁裁决是终局的，对双方具有约束力。仲裁的所有费用将由仲裁败诉方承担。'],
    //   'For questions about the software, you can call the customer service hotline.': ['有关本软件的问题，您可拨打客户服务热线咨询。'],
    //   'Thank you for your support. In order to better answer your questions and protect your rights and interests, please read the following instructions carefully before continuing: In order to improve the stability of the product, the developer will collect some error information and technical data of your product. The developer asks you to grant the developer the right to collect and analyze the following information:': ['感谢您的支持，为了更好的解答您的疑问和保护您的权益，请在继续之前仔细阅读以下说明：为了更好的提高产品的稳定性，开发者将会收集您的产品的一些错误信息和技术数据，开发者请您授予开发者对以下信息进行收集和分析的权利：'],
    //   'Equipment information: such as mobile phone operating system, mobile phone language, terminal model, mobile phone networking mode, mobile phone SIM card, etc.': ['设备信息：如手机操作系统、手机语言、终端型号、手机联网模式、手机SIM卡等。'],
    //   'Client information: such as client version number, client download channel, time of user opening / closing client, time and location of user opening third-party app, etc.': ['客户端信息：如客户端版本号、客户端下载渠道、用户打开/关闭客户端的时间、用户打开第三方App时间和位置等。'],
    //   'Application information: such as application error information, whether the service is started, etc.': ['应用信息：如应用报错信息、服务是否启动等。'],
    //   // tslint:disable-next-line:max-line-length
    //   'If you do not want your above information to be collected and analyzed by developers, please do not continue and exit this program.': ['如果您不希望您的上述信息被开发者收集和分析，请您不要继续，退出本程序。'],
    //   'In addition, the software needs to access the network in the process of use, the generated traffic fee is charged by the operator, please consult your operator for details.': ['另外，本软件在使用过程中需访问网络，所产生的流量费用由运营商收取，详情请咨询您所属的运营商。'],
    //   'If you have any questions, you can contact the developer for more information.': ['如果您有任何问题，您可以和开发者联系以取得详细资讯。'],
    //   'All rights reserved. The developer reserves the right of interpretation within the scope permitted by law.': ['版权所有，开发者保留在法律许可范围内的解释权。'],
    //   Url: ['网址'],
    //   'Thank you': ['谢谢'],
    // };
    // this.cv.addLanguages({});
    return Promise.all(this.ps.get(0)).then(rs => {
      //   return of([]).toPromise();
      // }).then(rs => {
        return rs;
      });
    }
}
