import { TestBed } from '@angular/core/testing';
import { Menuservice } from './menu-service';

describe('Menuservice', () => {
  let service: Menuservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menuservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
