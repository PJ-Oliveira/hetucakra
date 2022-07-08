import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoCincoComponent } from './posicao-cinco.component';

describe('PosicaoCincoComponent', () => {
  let component: PosicaoCincoComponent;
  let fixture: ComponentFixture<PosicaoCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
