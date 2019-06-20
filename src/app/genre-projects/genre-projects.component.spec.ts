import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreProjectsComponent } from './genre-projects.component';

describe('GenreProjectsComponent', () => {
  let component: GenreProjectsComponent;
  let fixture: ComponentFixture<GenreProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
