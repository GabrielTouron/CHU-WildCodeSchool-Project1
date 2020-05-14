import { Component, OnInit } from '@angular/core';

import { NewsFlowService } from 'src/app/shared/services/news-flow.service';
// import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newsFlow: object[];

  constructor(private newsFlowService: NewsFlowService){ }

  ngOnInit() {
    this.newsFlow = this.newsFlowService.newsFlow;
  }

}
