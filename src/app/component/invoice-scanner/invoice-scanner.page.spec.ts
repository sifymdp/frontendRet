import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceScannerPage } from './invoice-scanner.page';

describe('InvoiceScannerPage', () => {
  let component: InvoiceScannerPage;
  let fixture: ComponentFixture<InvoiceScannerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvoiceScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
