import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVelhaComponent } from './pagina-velha.component';

describe('PaginaVelhaComponent', () => {
  let component: PaginaVelhaComponent;
  let fixture: ComponentFixture<PaginaVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaVelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
