import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PagenotfoundComponent } from './pagenotfound.component';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('PagenotfoundComponent Class Testing',()=>{
    it('should create pagenotfound', () => {
      expect(component).toBeTruthy();
    });
    it('should have home method', () => {
      expect((component.home)).toBeTruthy();
    });
  });

  describe('PagenotfoundComponent DOM Testing',()=>{
    it('should render heading in h1 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Oops!');
    });
    it('should have button', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toBeTruthy();
    });
    it('should have button name as `Home` ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toEqual('Home');
    });
  });

});
