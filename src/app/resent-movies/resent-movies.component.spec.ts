import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentMoviesComponent } from './resent-movies.component';

describe('ResentMoviesComponent', () => {
  let component: ResentMoviesComponent;
  let fixture: ComponentFixture<ResentMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResentMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
