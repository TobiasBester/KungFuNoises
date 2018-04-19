import { TestBed, inject } from '@angular/core/testing';

import { PlayerModalService } from './player-modal.service';

describe('PlayerModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerModalService]
    });
  });

  it('should be created', inject([PlayerModalService], (service: PlayerModalService) => {
    expect(service).toBeTruthy();
  }));
});
