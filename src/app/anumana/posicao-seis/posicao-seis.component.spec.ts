import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoSeisComponent } from './posicao-seis.component';

describe('PosicaoSeisComponent', () => {
  let component: PosicaoSeisComponent;
  let fixture: ComponentFixture<PosicaoSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
