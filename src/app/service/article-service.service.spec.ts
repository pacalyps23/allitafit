import { TestBed, inject } from '@angular/core/testing';

import { ArticleService } from './article-service.service';

describe('ArticleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
