import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuvidasFrequentesPage } from './duvidas-frequentes.page';

describe('DuvidasFrequentesPage', () => {
  let component: DuvidasFrequentesPage;
  let fixture: ComponentFixture<DuvidasFrequentesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidasFrequentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuvidasFrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
