import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettodoComponent } from './dettodo.component';

describe('DettodoComponent', () => {
  let component: DettodoComponent;
  let fixture: ComponentFixture<DettodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
