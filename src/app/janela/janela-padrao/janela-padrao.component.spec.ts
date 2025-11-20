import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaPadraoComponent } from './janela-padrao.component';

describe('JanelaPadraoComponent', () => {
  let component: JanelaPadraoComponent;
  let fixture: ComponentFixture<JanelaPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaPadraoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
