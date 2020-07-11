import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component'
import { PokemonListItemTextComponent } from './pokemon-list-item-text/pokemon-list-item-text.component'
import { PokemonService } from './pokemon.service'
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component'

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonListItemComponent,
        PokemonListItemTextComponent,
        PokemonSearchComponent,
    ],
    imports: [CommonModule],
    exports: [
        PokemonListComponent,
        PokemonListItemComponent,
        PokemonListItemTextComponent,
    ],
    providers: [PokemonService],
})
export class PokemonModule {}
