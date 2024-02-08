import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabOrderPage } from './tab-order.page';

describe('TabOrderPage', () => {
  let component: TabOrderPage;
  let fixture: ComponentFixture<TabOrderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
