import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('SignupComponent Class Testing',()=>{
    it('should create signup', () => {
      expect(component).toBeTruthy();
    });
    it('should have passwordCheck method', () => {
      expect((component.passwordCheck)).toBeTruthy();
    });
    it('should have adduser method', () => {
      expect((component.adduser)).toBeTruthy();
    });
  });

  describe('SignupComponent DOM Testing',()=>{
    it('should render heading in h1 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('SignUp');
    });
    it('should have button', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toBeTruthy();
    });
  });

});
