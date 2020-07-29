import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component'
import { PokemonListItemTextComponent } from './pokemon-list-item-text/pokemon-list-item-text.component'
import { PokemonService } from './pokemon.service'
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component'
import { PokemonDetailedCardComponent } from './pokemon-detailed-card/pokemon-detailed-card.component'
import { PokemonEditFormComponent } from './pokemon-edit-form/pokemon-edit-form.component'

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonListItemComponent,
        PokemonListItemTextComponent,
        PokemonSearchComponent,
        PokemonDetailedCardComponent,
        PokemonEditFormComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [
        PokemonListComponent,
        PokemonListItemComponent,
        PokemonListItemTextComponent,
        PokemonDetailedCardComponent,
        PokemonEditFormComponent,
    ],
    providers: [PokemonService],
})
export class PokemonModule {}
