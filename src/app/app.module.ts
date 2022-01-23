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
import { HelpComponent } from './contact/help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { BasicauthhttpinterceptorService } from './service/basicauthhttpinterceptor.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AboutusComponent } from './help/aboutus.component';
import { TransactionStatementComponent } from './transaction-statement/transaction-statement.component';
import { CreditScoreComponent } from './credit-score/credit-score.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ConfirmationDailogComponent } from './confirmation-dailog/confirmation-dailog.component';



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
    CreditScoreComponent,
    TermsAndConditionsComponent,
    ConfirmationDailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
   
   
    //FontAwesomeModule
   
    
  ],
 
  providers: [
    // {  
    //   provide:HTTP_INTERCEPTORS, useClass:BasicauthhttpinterceptorService, multi:true 
    // }
    ],
  bootstrap: [AppComponent],
  entryComponents:[TermsAndConditionsComponent]
})

export class AppModule {

  // constructor(library:FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
 }
