import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofplayersComponent } from './listofplayers.component';

describe('ListofplayersComponent', () => {
  let component: ListofplayersComponent;
  let fixture: ComponentFixture<ListofplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofplayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
