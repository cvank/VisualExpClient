import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionSourcesComponent } from './list-transaction-sources.component';

describe('ListTransactionSourcesComponent', () => {
  let component: ListTransactionSourcesComponent;
  let fixture: ComponentFixture<ListTransactionSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
