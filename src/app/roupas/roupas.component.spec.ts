import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasComponent } from './roupas.component';

describe('RoupasComponent', () => {
  let component: RoupasComponent;
  let fixture: ComponentFixture<RoupasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoupasComponent]
    });
    fixture = TestBed.createComponent(RoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
