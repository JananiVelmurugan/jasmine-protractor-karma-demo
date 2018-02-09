import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  //to make sure we have TestService before we test it
  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy(); 
  }));

  //to make sure we have add function in TestService before we test it
  it('should have add function', inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  //to test the add functionality - positive scenario
  it('should add correctly', inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));

  //to test the add functionality - negative scenario
  it('should add incorrectly', inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).not.toEqual(5);
  }));
});
