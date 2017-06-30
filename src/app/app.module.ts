import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{ HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardlistComponent } from './card/cardlist/cardlist.component';
import { CardorderComponent } from './card/cardorder/cardorder.component';
import { AccountsummaryComponent } from './account/accountsummary/accountsummary.component';
import { CardtransactionComponent } from './account/cardtransaction/cardtransaction.component';
import { AuthanddeclineComponent } from './account/authanddecline/authanddecline.component';
import { MyreportComponent } from './report/myreport/myreport.component';
import { AnalyticsComponent } from './report/analytics/analytics.component';
import { InvoiceandpaymentComponent } from './finance/invoiceandpayment/invoiceandpayment.component';
import { BillpayComponent } from './finance/billpay/billpay.component';
import { MybankComponent } from './finance/mybank/mybank.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { SitelocatorComponent } from './admin/sitelocator/sitelocator.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { ContactmanagementComponent } from './admin/contactmanagement/contactmanagement.component';
import { HomeComponent } from './home/home.component';
import { MaintaincardgroupComponent } from './card/maintaincardgroup/maintaincardgroup.component';
import { CreatecardgroupComponent } from './card/createcardgroup/createcardgroup.component';
import { PromptedidmaintenanceComponent } from './card/promptedidmaintenance/promptedidmaintenance.component';
import { PromptedidpoolmaintenanceComponent } from './card/promptedidpoolmaintenance/promptedidpoolmaintenance.component';
import { MaintainvelocityprofileComponent } from './card/maintainvelocityprofile/maintainvelocityprofile.component';

@NgModule({
  declarations: [
    AppComponent,   
    NavbarComponent,
    FooterComponent,
    CardlistComponent,
    CardorderComponent,
    AccountsummaryComponent,
    CardtransactionComponent,
    AuthanddeclineComponent,
    MyreportComponent,
    AnalyticsComponent,
    InvoiceandpaymentComponent,
    BillpayComponent,
    MybankComponent,
    UsermanagementComponent,
    SitelocatorComponent,
    ContactusComponent,
    ContactmanagementComponent,
    HomeComponent,
    MaintaincardgroupComponent,
    CreatecardgroupComponent,
    PromptedidmaintenanceComponent,
    PromptedidpoolmaintenanceComponent,
    MaintainvelocityprofileComponent,

  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot([
      {path: "home", component:HomeComponent},
      {path: "cardlist", component:CardlistComponent},
      {path: "cardorder", component:CardorderComponent},
      {path: "createcardgroup", component:CreatecardgroupComponent},
      {path: "manintaincardgroup", component:MaintaincardgroupComponent},
      {path: "maintainvelocityprofile", component:MaintainvelocityprofileComponent},
      {path: "promptedidmaintenance", component:PromptedidmaintenanceComponent},
      {path: "promptedidpoolmaintenance", component:PromptedidpoolmaintenanceComponent},
      {path: "billpay", component:BillpayComponent},
      {path: "invoiceandpayment", component:InvoiceandpaymentComponent},
      {path: "mybank", component:MybankComponent},
      {path: "analytics", component:AnalyticsComponent},
      {path: "myreport", component:MyreportComponent},
      {path: "accountsummary", component:AccountsummaryComponent},
      {path: "authanddecline", component:AuthanddeclineComponent},
      {path: "cardtransaction", component:CardtransactionComponent},
      {path: "contactmanagement", component:ContactmanagementComponent},
      {path: "contactus", component:ContactusComponent},
      {path: "sitelocator", component:SitelocatorComponent},
      {path: "usermanagement", component:UsermanagementComponent}   
      ]),   
      AgGridModule.withComponents([CardlistComponent]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
