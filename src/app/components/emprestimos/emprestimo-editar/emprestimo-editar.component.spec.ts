import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoEditarComponent } from './emprestimo-editar.component';

describe('EmprestimoEditarComponent', () => {
  let component: EmprestimoEditarComponent;
  let fixture: ComponentFixture<EmprestimoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimoEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
