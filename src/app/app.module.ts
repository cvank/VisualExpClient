import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CalendarComponent} from './calendar/calendar.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {AddTransactionSourceComponent} from './add-transaction-source/add-transaction-source.component';
import {ListTransactionsComponent} from './list-transactions/list-transactions.component';
import {ListTransactionSourcesComponent} from './list-transaction-sources/list-transaction-sources.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {ListGroupsComponent} from './list-groups/list-groups.component';
import {RecentTransactionsComponent} from './recent-transactions/recent-transactions.component';
import {DayTransactionsComponent} from './day-transactions/day-transactions.component';
import {MonthlyTransactionsComponent} from './monthly-transactions/monthly-transactions.component';
import {CalendarService} from './services/calendar.service';
import {DashboardService} from './services/dashboard.service';
import {LoginService} from './services/login.service';
import {SignupService} from './services/signup.service';
import {TransactionSourceService} from './services/transaction-source.service';
import {TransactionService} from './services/transaction.service';
import {UserGroupService} from './services/user-group.service';
import {UserService} from './services/user.service';
import {TimeframeTransactionsComponent} from './timeframe-transactions/timeframe-transactions.component';
import {HttpClientModule} from '@angular/common/http';
import {VisualexpCustomMaterialModuleModule} from './visualexp-custom-material-module/visualexp-custom-material-module.module';
import {NavigationComponent} from './navigation/navigation.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'groups', component: ListGroupsComponent},
  {path: 'transactions', component: ListTransactionsComponent},
  {path: 'transactions-sources', component: ListTransactionSourcesComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AddTransactionComponent,
    AddUserComponent,
    AddGroupComponent,
    AddTransactionSourceComponent,
    ListTransactionsComponent,
    ListTransactionSourcesComponent,
    ListUsersComponent,
    ListGroupsComponent,
    RecentTransactionsComponent,
    DayTransactionsComponent,
    MonthlyTransactionsComponent,
    TimeframeTransactionsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VisualexpCustomMaterialModuleModule,

    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    UserService,
    CalendarService,
    UserGroupService,
    TransactionService,
    TransactionSourceService,
    SignupService,
    LoginService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
