import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionSourceComponent } from './add-transaction-source.component';

describe('AddTransactionSourceComponent', () => {
  let component: AddTransactionSourceComponent;
  let fixture: ComponentFixture<AddTransactionSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransactionSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
