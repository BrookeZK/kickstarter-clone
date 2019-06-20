import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickstarterNewsComponent } from './kickstarter-news.component';

describe('KickstarterNewsComponent', () => {
  let component: KickstarterNewsComponent;
  let fixture: ComponentFixture<KickstarterNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickstarterNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickstarterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
