import { Component, OnInit, Input } from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss'],
})
export class PokemonListItemComponent implements OnInit {
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
