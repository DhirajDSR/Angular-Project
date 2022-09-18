import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SonglistService } from './songlist.service';

describe('SonglistService', () => {
  let service: SonglistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    });
    service = TestBed.inject(SonglistService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have addsongservice method', () => {  
    expect((service.addsongservice)).toBeTruthy();
  });

  it('should have adduserservice method', () => {  
    expect((service.adduserservice)).toBeTruthy();
  });

  it('should have deletesongservice method', () => {  
    expect((service.deletesongservice)).toBeTruthy();
  });

  it('should have editsongservice method', () => {  
    expect((service.addsongservice)).toBeTruthy();
  });

  it('should have getdataservice method', () => {  
    expect((service.getdataservice)).toBeTruthy();
  });

});
