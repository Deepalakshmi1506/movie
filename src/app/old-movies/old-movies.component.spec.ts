import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMoviesComponent } from './old-movies.component';

describe('OldMoviesComponent', () => {
  let component: OldMoviesComponent;
  let fixture: ComponentFixture<OldMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
