import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQrcodeFormComponent } from './company-qrcode-form.component';

describe('CompanyQrcodeFormComponent', () => {
  let component: CompanyQrcodeFormComponent;
  let fixture: ComponentFixture<CompanyQrcodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyQrcodeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyQrcodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
