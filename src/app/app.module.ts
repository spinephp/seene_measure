import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
// import { TranslatePipe } from './translate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { SettingsService } from './commons/service/settings.service';
import { LocalStorage } from './commons/provider/local-storage';
import { ValuesService } from './commons/service/values.service';
import { HomeResolveService } from './home/home-resolve.service';
// import 'jquery';
// import 'bootstrap';
import { DeviceComponent } from './device/device.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';
import { AnalysisAgreementComponent } from './analysis-agreement/analysis-agreement.component';
import { MaterialModule } from './material/material.module';
import { PipeModule, TranslatePipe } from './pipe/pipe.module';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    PrivacyPolicyComponent,
    HomeComponent,
    SupportComponent,
    // TranslatePipe,
    DeviceComponent,
    UserAgreementComponent,
    AnalysisAgreementComponent,
    // DataAnalysisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    PipeModule,
    RegisterModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorage,
    SettingsService,
    ValuesService,
    TranslatePipe,
    HomeResolveService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
