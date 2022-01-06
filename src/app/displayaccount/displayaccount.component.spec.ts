import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayaccountComponent } from './displayaccount.component';

describe('DisplayaccountComponent', () => {
  let component: DisplayaccountComponent;
  let fixture: ComponentFixture<DisplayaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
