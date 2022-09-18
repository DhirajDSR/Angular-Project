import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('LoginComponent Class Testing',()=>{

    it('should create login', () => {
      expect(component).toBeTruthy();
    });

    it('should have signup method', () => {
      
      expect((component.signup)).toBeTruthy();
    });

    it('should have onSubmit method', () => {
      
      expect((component.onSubmit)).toBeTruthy();
    });

    

  
  });

  describe('LoginComponent DOM Testing',()=>{

    it('should render heading in h1 tag', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('LogIn');
    });
  
    it('should have button', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toBeTruthy();
    });
  
    it('should have button name as `Login` ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button').textContent).toEqual('Login');
    });
  
    it('should accept email ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('input[type="email"]')).toBeTruthy();
    });
    it('should accept password ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('input[type="password"]')).toBeTruthy();
    });
  
    it('should have button name as `Sign up here` ', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('button')[1].textContent).toEqual('Sign up here');
    });

  });

});
