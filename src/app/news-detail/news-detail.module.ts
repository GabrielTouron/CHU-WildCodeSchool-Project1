import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailRoutingModule } from './news-detail-routing.module';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsFlowService } from '../shared/services/news-flow.service';


@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    NewsDetailRoutingModule
  ],
  providers: [
    NewsFlowService
  ]
})
export class NewsDetailModule { }
