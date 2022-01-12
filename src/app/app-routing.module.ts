import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayaccountComponent } from './displayaccount/displayaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TransactionStatementComponent } from './transaction-statement/transaction-statement.component';
import { CreditScoreComponent } from './credit-score/credit-score.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'help',component:HelpComponent},
  {path:'display',component:DisplayaccountComponent,canActivate:[AuthGaurdService]},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path:'transaction',component:TransactionStatementComponent,canActivate:[AuthGaurdService]},
  {path:'creditScore',component:CreditScoreComponent,canActivate:[AuthGaurdService]},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


