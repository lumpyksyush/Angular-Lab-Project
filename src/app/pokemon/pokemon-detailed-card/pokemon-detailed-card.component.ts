import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../pokemon.service'

@Component({
    selector: 'app-pokemon-detailed-card',
    templateUrl: './pokemon-detailed-card.component.html',
    styleUrls: ['./pokemon-detailed-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailedCardComponent implements OnInit {
    @Input() pokemon: Pokemon

    constructor(
        private _route: ActivatedRoute,
        private _pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this._route.paramMap.subscribe(
            (params) =>
                (this.pokemon = this._pokemonService.getById(+params.get('id')))
        )
    }

    onCatch(pokemon: Pokemon) {
        this.pokemon.isCaught = !this.pokemon.isCaught
        if (this.pokemon.isCaught) {
            console.log(`Покемон ${this.pokemon.name} был пойман`)
        } else {
            console.log(`Покемон ${this.pokemon.name} был отпущен`)
        }
    }
}
