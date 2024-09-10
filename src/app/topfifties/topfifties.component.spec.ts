import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiftiesComponent } from './topfifties.component';

describe('TopfiftiesComponent', () => {
  let component: TopfiftiesComponent;
  let fixture: ComponentFixture<TopfiftiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopfiftiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopfiftiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
