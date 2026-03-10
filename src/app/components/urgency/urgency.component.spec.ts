import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencyComponent } from './urgency.component';

describe('UrgencyComponent', () => {
  let component: UrgencyComponent;
  let fixture: ComponentFixture<UrgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
