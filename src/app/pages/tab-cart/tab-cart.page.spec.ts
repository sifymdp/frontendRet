import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPage } from 'src/app/component/cart/cart.page';

import { TabCartPage } from './tab-cart.page';

describe('Tab1Page', () => {
  let component: TabCartPage;
  let fixture: ComponentFixture<TabCartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabCartPage],
      imports: [IonicModule.forRoot(), CartPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
