import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentQrcodeFormComponent } from './establishment-qrcode-form.component';

describe('CompanyQrcodeFormComponent', () => {
  let component: EstablishmentQrcodeFormComponent;
  let fixture: ComponentFixture<EstablishmentQrcodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentQrcodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentQrcodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
