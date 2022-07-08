import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoNoveComponent } from './posicao-nove.component';

describe('PosicaoNoveComponent', () => {
  let component: PosicaoNoveComponent;
  let fixture: ComponentFixture<PosicaoNoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoNoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoNoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
