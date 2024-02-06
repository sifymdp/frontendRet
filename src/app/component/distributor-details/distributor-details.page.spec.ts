import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistributorDetailsPage } from './distributor-details.page';

describe('DistributorDetailsPage', () => {
  let component: DistributorDetailsPage;
  let fixture: ComponentFixture<DistributorDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DistributorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
