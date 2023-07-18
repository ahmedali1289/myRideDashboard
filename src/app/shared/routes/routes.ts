import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../../components/apps/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'search-pages',
    loadChildren: () => import('../../components/others/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/others/sample/sample.module').then(m => m.SampleModule)
  },
 
];
