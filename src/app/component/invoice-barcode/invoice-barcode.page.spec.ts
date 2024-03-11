import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceBarcodePage } from './invoice-barcode.page';

describe('InvoiceBarcodePage', () => {
  let component: InvoiceBarcodePage;
  let fixture: ComponentFixture<InvoiceBarcodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvoiceBarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
