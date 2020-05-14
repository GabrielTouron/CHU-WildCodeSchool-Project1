import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsFlowService } from '../shared/services/news-flow.service';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    NewsFlowService
  ]
})
export class HomeModule { }
