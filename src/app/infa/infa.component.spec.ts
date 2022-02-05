import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfaComponent } from './infa.component';

describe('InfaComponent', () => {
  let component: InfaComponent;
  let fixture: ComponentFixture<InfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
