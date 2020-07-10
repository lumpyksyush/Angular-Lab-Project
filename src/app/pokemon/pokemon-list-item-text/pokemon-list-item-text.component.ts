import { Component, OnInit, Input } from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'

@Component({
    selector: 'app-pokemon-list-item-text',
    templateUrl: './pokemon-list-item-text.component.html',
    styleUrls: ['./pokemon-list-item-text.component.scss'],
})
export class PokemonListItemTextComponent implements OnInit {
    @Input() pokemon: Pokemon
    constructor() {}

    ngOnInit(): void {}

    catchPokemon(pokemon) {
        pokemon.isCaught = !pokemon.isCaught
        if (pokemon.isCaught) {
            console.log(`Покемон ${pokemon.name} был пойман`)
        } else {
            console.log(`Покемон ${pokemon.name} был отпущен`)
        }
    }
}
