import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayaccountComponent } from './displayaccount/displayaccount.component';
import { HelpComponent } from './help/help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { BasicauthhttpinterceptorService } from './service/basicauthhttpinterceptor.service';

import { AboutusComponent } from './aboutus/aboutus.component';
import { TransactionStatementComponent } from './transaction-statement/transaction-statement.component';
import { CreditScoreComponent } from './credit-score/credit-score.component';
//import { FontAwesomeModule} from '@fortawesome/fontawesome-free';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(fas, far);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DisplayaccountComponent,
    HelpComponent,
    NavbarComponent,
    FooterComponent,
    LogoutComponent,
    AboutusComponent,
    TransactionStatementComponent,
    CreditScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //FontAwesomeModule
   
    
  ],
 
  providers: [
    // {  
    //   provide:HTTP_INTERCEPTORS, useClass:BasicauthhttpinterceptorService, multi:true 
    // }
    ],
  bootstrap: [AppComponent]
})

export class AppModule {

  // constructor(library:FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
 }
