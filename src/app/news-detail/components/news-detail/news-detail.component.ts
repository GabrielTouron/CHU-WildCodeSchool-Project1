import { Component, OnInit } from '@angular/core';
import { NewsFlowService } from 'src/app/shared/services/news-flow.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsFlowFakeBackend: object[];
  newsFlowId: number;
  newsFlow: object;

  constructor(
    private newsFlowService: NewsFlowService,
    private Router: Router,
    private route: ActivatedRoute)
    { }

  ngOnInit(): void {
    this.newsFlowFakeBackend = this.newsFlowService.newsFlow;
    this.getRouteParam();
  }

  getRouteParam() {
    const routerSubscription = this.route.paramMap.subscribe(params => {
      if ( params && params.get('id')) {
        const routeNewsFlowId = Number(params.get('id'));
        this.newsFlowId = routeNewsFlowId;
        this.getOneNews(this.newsFlowId);
      }
    })
  }

  getOneNews(id: number) {
    this.newsFlow = this.newsFlowFakeBackend[id];
  }

}
