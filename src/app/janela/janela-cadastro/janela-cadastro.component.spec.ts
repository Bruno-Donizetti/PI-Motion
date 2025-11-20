import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaCadastroComponent } from './janela-cadastro.component';

describe('JanelaCadastroComponent', () => {
  let component: JanelaCadastroComponent;
  let fixture: ComponentFixture<JanelaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
