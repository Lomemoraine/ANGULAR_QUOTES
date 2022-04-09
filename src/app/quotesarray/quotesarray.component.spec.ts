import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesarrayComponent } from './quotesarray.component';

describe('QuotesarrayComponent', () => {
  let component: QuotesarrayComponent;
  let fixture: ComponentFixture<QuotesarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
