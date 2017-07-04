import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AristocratsComponent } from './aristocrats.component';

describe('AristocratsComponent', () => {
  let component: AristocratsComponent;
  let fixture: ComponentFixture<AristocratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AristocratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AristocratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
