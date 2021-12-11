import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointdevueComponent } from './pointdevue.component';

describe('PointdevueComponent', () => {
  let component: PointdevueComponent;
  let fixture: ComponentFixture<PointdevueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointdevueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointdevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
