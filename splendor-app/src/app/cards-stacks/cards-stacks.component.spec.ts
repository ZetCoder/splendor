import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStacksComponent } from './cards-stacks.component';

describe('CardsStacksComponent', () => {
  let component: CardsStacksComponent;
  let fixture: ComponentFixture<CardsStacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsStacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
