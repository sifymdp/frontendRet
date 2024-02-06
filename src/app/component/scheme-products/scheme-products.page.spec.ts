import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchemeProductsPage } from './scheme-products.page';

describe('SchemeProductsPage', () => {
  let component: SchemeProductsPage;
  let fixture: ComponentFixture<SchemeProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchemeProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
