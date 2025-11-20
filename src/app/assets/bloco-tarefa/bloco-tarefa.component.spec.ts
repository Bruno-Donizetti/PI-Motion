import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoTarefaComponent } from './bloco-tarefa.component';

describe('BlocoTarefaComponent', () => {
  let component: BlocoTarefaComponent;
  let fixture: ComponentFixture<BlocoTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocoTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
