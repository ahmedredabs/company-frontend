import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegisterFormComponent } from 'app/company-register-form/company-register-form.component';

describe('CompanyRegisterFormComponent', () => {
  let component: CompanyRegisterFormComponent;
  let fixture: ComponentFixture<CompanyRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
