import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TophundredsComponent } from './tophundreds.component';

describe('TophundredsComponent', () => {
  let component: TophundredsComponent;
  let fixture: ComponentFixture<TophundredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TophundredsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TophundredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
