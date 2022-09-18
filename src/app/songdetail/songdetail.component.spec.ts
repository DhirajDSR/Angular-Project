import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SongdetailComponent } from './songdetail.component';

describe('SongdetailComponent', () => {
  let component: SongdetailComponent;
  let fixture: ComponentFixture<SongdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ SongdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('SongdetailComponent Class Testing',()=>{
    it('should create Songdetail', () => {
      expect(component).toBeTruthy();
    });
    it('should have addsong method', () => {
      expect((component.addsong)).toBeTruthy();
    });
    it('should have goback method', () => {
      expect((component.goback)).toBeTruthy();
    });
  });

  describe('SongdetailComponent DOM Testing',()=>{
    it('should render heading in h1 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Enter Song Detail');
    });
    it('should have button', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toBeTruthy();
    });
  });

});
