import { TestBed } from '@angular/core/testing';

import { CustomNavigator } from './custom-navigator';

describe('CustomNavigator', () => {
  let service: CustomNavigator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomNavigator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
