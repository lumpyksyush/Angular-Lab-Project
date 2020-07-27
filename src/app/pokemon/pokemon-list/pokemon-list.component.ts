import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../pokemon.service'
export interface Pokemon {
    name: string
    id: number
    damage: number
    imgSrc: string
    isCaught: boolean
    detail?: string
    date?: string
}
@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
    public pokemons: Pokemon[] = []
    dashboardView: boolean = true

    constructor(private _pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.pokemons = this._pokemonService.getAll()
    }

    switchView() {
        this.dashboardView = !this.dashboardView
    }

    filterByName(name: string): void {
        this.pokemons = this._pokemonService.filterByName(name)
    }

    onCatch(pokemon: Pokemon) {
        pokemon.isCaught = !pokemon.isCaught
        if (pokemon.isCaught) {
            console.log(`Покемон ${pokemon.name} был пойман`)
        } else {
            console.log(`Покемон ${pokemon.name} был отпущен`)
        }
    }
}
