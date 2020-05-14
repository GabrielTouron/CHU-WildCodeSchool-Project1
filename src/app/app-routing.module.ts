import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';



const routes: Routes = [
  { path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        loadChildren: () => import('./news-detail/news-detail.module'). then(m => m.NewsDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
