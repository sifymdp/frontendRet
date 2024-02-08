import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from 'src/app/component/home/home.page';

import { TabHomePage } from './tab-home.page';

describe('Tab1Page', () => {
  let component: TabHomePage;
  let fixture: ComponentFixture<TabHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHomePage],
      imports: [IonicModule.forRoot(), HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(TabHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
