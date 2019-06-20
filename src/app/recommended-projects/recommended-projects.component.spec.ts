import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProjectsComponent } from './recommended-projects.component';

describe('RecommendedProjectsComponent', () => {
  let component: RecommendedProjectsComponent;
  let fixture: ComponentFixture<RecommendedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
