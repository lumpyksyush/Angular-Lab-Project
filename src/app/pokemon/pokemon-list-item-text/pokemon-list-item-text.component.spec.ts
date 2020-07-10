import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListItemTextComponent } from './pokemon-list-item-text.component';

describe('PokemonListItemTextComponent', () => {
  let component: PokemonListItemTextComponent;
  let fixture: ComponentFixture<PokemonListItemTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListItemTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
