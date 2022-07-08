import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoQuatroComponent } from './posicao-quatro.component';

describe('PosicaoQuatroComponent', () => {
  let component: PosicaoQuatroComponent;
  let fixture: ComponentFixture<PosicaoQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoQuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
