import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoOitoComponent } from './posicao-oito.component';

describe('PosicaoOitoComponent', () => {
  let component: PosicaoOitoComponent;
  let fixture: ComponentFixture<PosicaoOitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoOitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoOitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
