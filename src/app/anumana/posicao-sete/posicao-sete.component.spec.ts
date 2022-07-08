import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoSeteComponent } from './posicao-sete.component';

describe('PosicaoSeteComponent', () => {
  let component: PosicaoSeteComponent;
  let fixture: ComponentFixture<PosicaoSeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoSeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoSeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
