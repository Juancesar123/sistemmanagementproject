import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseordercontentComponent } from './purchaseordercontent.component';

describe('PurchaseordercontentComponent', () => {
  let component: PurchaseordercontentComponent;
  let fixture: ComponentFixture<PurchaseordercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseordercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseordercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
