import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllTopDealsPage } from './all-top-deals.page';

describe('AllTopDealsPage', () => {
  let component: AllTopDealsPage;
  let fixture: ComponentFixture<AllTopDealsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllTopDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
