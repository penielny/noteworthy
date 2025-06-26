import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationModalComponent } from './customization-modal.component';

describe('CustomizationModalComponent', () => {
  let component: CustomizationModalComponent;
  let fixture: ComponentFixture<CustomizationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
