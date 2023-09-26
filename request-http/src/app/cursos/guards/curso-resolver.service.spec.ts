import { TestBed } from '@angular/core/testing';

import { CursoResolverService } from './curso-resolver.guard';

describe('CursoResolverService', () => {
  let service: CursoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
