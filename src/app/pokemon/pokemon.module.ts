import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';



@NgModule({
  declarations: [PokemonHeaderComponent, PokemonListComponent, PokemonListItemComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
