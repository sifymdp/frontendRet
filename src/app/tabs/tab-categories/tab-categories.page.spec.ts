import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from 'src/app/component/categories/categories.page';

import { TabCategoriesPage } from './tab-categories.page';

describe('Tab1Page', () => {
  let component: TabCategoriesPage;
  let fixture: ComponentFixture<TabCategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabCategoriesPage],
      imports: [IonicModule.forRoot(), CategoriesPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
