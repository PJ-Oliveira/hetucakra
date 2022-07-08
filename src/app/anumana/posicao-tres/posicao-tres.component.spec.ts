import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoTresComponent } from './posicao-tres.component';

describe('PosicaoTresComponent', () => {
  let component: PosicaoTresComponent;
  let fixture: ComponentFixture<PosicaoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
