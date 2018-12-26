import { TestBed, inject } from '@angular/core/testing';

import { UsuarioGuardService } from './usuario-guard.service';

describe('UsuarioGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioGuardService]
    });
  });

  it('should be created', inject([UsuarioGuardService], (service: UsuarioGuardService) => {
    expect(service).toBeTruthy();
  }));
});
