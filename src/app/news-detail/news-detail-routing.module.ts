import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { HomePageComponent } from '../home/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'news-detail',
    children: [{
      path: ':id',
      component: NewsDetailComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailRoutingModule { }
