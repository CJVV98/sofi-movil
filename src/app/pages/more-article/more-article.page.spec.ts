import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreArticlePage } from './more-article.page';

describe('MoreArticlePage', () => {
  let component: MoreArticlePage;
  let fixture: ComponentFixture<MoreArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
