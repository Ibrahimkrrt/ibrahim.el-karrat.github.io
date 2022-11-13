/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CircleLayoutService } from './circle-layout.service';

describe('Service: CircleLayout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleLayoutService]
    });
  });

  it('should ...', inject([CircleLayoutService], (service: CircleLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
