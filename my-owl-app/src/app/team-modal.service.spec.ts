import { TestBed, inject } from '@angular/core/testing';

import { TeamModalService } from './team-modal.service';

describe('TeamModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamModalService]
    });
  });

  it('should be created', inject([TeamModalService], (service: TeamModalService) => {
    expect(service).toBeTruthy();
  }));
});
