import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinologsComponent } from './kinologs.component';

describe('KinologsComponent', () => {
  let component: KinologsComponent;
  let fixture: ComponentFixture<KinologsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinologsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinologsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
