import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ PlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('PlaylistComponent Class Testing',()=>{
    it('should create playlist', () => {
      expect(component).toBeTruthy();
    });
    it('should have delete method', () => {
      expect((component.delete)).toBeTruthy();
    });
    it('should have addsong method', () => {
      expect((component.addsong)).toBeTruthy();
    });  
  });

  describe('PlaylistComponent DOM Testing',()=>{
    it('should render heading in h3 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h3').textContent).toBeTruthy();
    });
   
    it('should have card to display songdetails ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.card').textContent).toBeTruthy();
    });
  });

});
