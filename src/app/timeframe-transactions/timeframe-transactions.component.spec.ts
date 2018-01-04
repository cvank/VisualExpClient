import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeframeTransactionsComponent } from './timeframe-transactions.component';

describe('TimeframeTransactionsComponent', () => {
  let component: TimeframeTransactionsComponent;
  let fixture: ComponentFixture<TimeframeTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeframeTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeframeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
