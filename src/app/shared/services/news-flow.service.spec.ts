import { TestBed } from '@angular/core/testing';

import { NewsFlowService } from './news-flow.service';

describe('NewsFlowService', () => {
  let service: NewsFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
