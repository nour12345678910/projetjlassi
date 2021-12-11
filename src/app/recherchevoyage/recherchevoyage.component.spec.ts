import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchevoyageComponent } from './recherchevoyage.component';

describe('RecherchevoyageComponent', () => {
  let component: RecherchevoyageComponent;
  let fixture: ComponentFixture<RecherchevoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchevoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchevoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
