import { Component, OnInit, Input } from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../pokemon.service'

@Component({
    selector: 'app-pokemon-edit-form',
    templateUrl: './pokemon-edit-form.component.html',
    styleUrls: ['./pokemon-edit-form.component.scss'],
})
export class PokemonEditFormComponent implements OnInit {
    @Input() pokemon: Pokemon

    constructor(
        private _route: ActivatedRoute,
        private _pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            const pokemon = this._pokemonService.getById(+params.get('id'))
            this.pokemon = {
                ...pokemon,
            }
        })
    }
}
