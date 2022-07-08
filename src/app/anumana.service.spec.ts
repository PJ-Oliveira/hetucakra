import { TestBed } from '@angular/core/testing';

import { AnumanaService } from './anumana.service';

describe('AnumanaService', () => {
  let service: AnumanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnumanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
