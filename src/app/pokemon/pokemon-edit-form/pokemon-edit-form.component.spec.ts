import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEditFormComponent } from './pokemon-edit-form.component';

describe('PokemonEditFormComponent', () => {
  let component: PokemonEditFormComponent;
  let fixture: ComponentFixture<PokemonEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
