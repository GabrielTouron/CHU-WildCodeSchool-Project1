import { Component, OnInit } from '@angular/core';

import {NewsFlowService} from "../../services/NewsFlow.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newsFlow;

  constructor(private newsFlowService: NewsFlowService){ }

  ngOnInit() {
    this.newsFlow = this.newsFlowService.newsFlow;
  }

}
