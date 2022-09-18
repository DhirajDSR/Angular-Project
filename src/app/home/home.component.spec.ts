import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../pipe/filter.pipe';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule  
      ],
      declarations: [ HomeComponent,FilterPipe ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('HomeComponent Class Testing',()=>{
    it('should create home', () => {
      expect(component).toBeTruthy();
    });
    it('should have pay method', () => {
      expect((component.play)).toBeTruthy();
    });  
    it('should have pause method', () => {
      expect((component.pause)).toBeTruthy();
    }); 
  });

  describe('HomeComponent DOM Testing',()=>{
    it('should render heading in h3 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h3').textContent).toBeTruthy();
    });
  
  });

});
