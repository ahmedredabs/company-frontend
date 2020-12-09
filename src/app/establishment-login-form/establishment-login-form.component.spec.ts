import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentLoginFormComponent } from './establishment-login-form.component';

describe('CompanyLoginFormComponent', () => {
  let component: EstablishmentLoginFormComponent;
  let fixture: ComponentFixture<EstablishmentLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
