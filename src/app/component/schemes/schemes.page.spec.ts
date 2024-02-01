import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchemesPage } from './schemes.page';

describe('SchemesPage', () => {
  let component: SchemesPage;
  let fixture: ComponentFixture<SchemesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
