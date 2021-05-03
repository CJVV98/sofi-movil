import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThematicPage } from './thematic.page';

describe('ThematicPage', () => {
  let component: ThematicPage;
  let fixture: ComponentFixture<ThematicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThematicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
