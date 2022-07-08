import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoDoisComponent } from './posicao-dois.component';

describe('PosicaoDoisComponent', () => {
  let component: PosicaoDoisComponent;
  let fixture: ComponentFixture<PosicaoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
