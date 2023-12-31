import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
import { RideComponent } from './ride/ride.component';
import { PromoComponent } from './promo/promo.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'terms&condition',
        component: TermsConditionComponent,
      },
      {
        path: 'privacy_policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'about_us',
        component: AboutUsComponent,
      },
      {
        path: 'notifications',
        component: NotificationComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'ride',
        component: RideComponent,
      },
      {
        path: 'promo',
        component: PromoComponent,
      },
      {
        path: 'account',
        component: AccountsComponent,
      },
      {
        path: '**',
        redirectTo: 'notifications',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
