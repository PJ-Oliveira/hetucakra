import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoUmComponent } from './posicao-um.component';

describe('PosicaoUmComponent', () => {
  let component: PosicaoUmComponent;
  let fixture: ComponentFixture<PosicaoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicaoUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
