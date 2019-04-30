import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputertypeComponent } from './computertype.component';

describe('ComputertypeComponent', () => {
  let component: ComputertypeComponent;
  let fixture: ComponentFixture<ComputertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
