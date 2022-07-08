import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnumanaComponent } from './anumana.component';

describe('AnumanaComponent', () => {
  let component: AnumanaComponent;
  let fixture: ComponentFixture<AnumanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnumanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnumanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
