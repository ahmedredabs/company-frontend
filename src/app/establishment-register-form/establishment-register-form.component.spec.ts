import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentRegisterFormComponent } from 'app/establishment-register-form/establishment-register-form.component';

describe('CompanyRegisterFormComponent', () => {
  let component: EstablishmentRegisterFormComponent;
  let fixture: ComponentFixture<EstablishmentRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
