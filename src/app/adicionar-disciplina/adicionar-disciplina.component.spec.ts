import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDisciplinaComponent } from './adicionar-disciplina.component';

describe('AdicionarDisciplinaComponent', () => {
  let component: AdicionarDisciplinaComponent;
  let fixture: ComponentFixture<AdicionarDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
