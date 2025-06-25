import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbarComponent } from './listbar.component';

describe('ListbarComponent', () => {
  let component: ListbarComponent;
  let fixture: ComponentFixture<ListbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
