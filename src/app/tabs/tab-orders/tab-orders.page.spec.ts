import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersPage } from 'src/app/component/orders/orders.page';

import { TabOrdersPage } from './tab-orders.page';

describe('Tab1Page', () => {
  let component: TabOrdersPage;
  let fixture: ComponentFixture<TabOrdersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabOrdersPage],
      imports: [IonicModule.forRoot(), OrdersPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TabOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
