import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTransactionsComponent } from './day-transactions.component';

describe('DayTransactionsComponent', () => {
  let component: DayTransactionsComponent;
  let fixture: ComponentFixture<DayTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
