import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core'
import { Router } from '@angular/router'
import { Pokemon } from '../pokemon-list/pokemon-list.component'

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListItemComponent implements OnInit {
    @Input() pokemon: Pokemon
    @Output() onCatch = new EventEmitter<Pokemon>()

    constructor(private _router: Router) {}

    ngOnInit(): void {}

    catchPokemon(pokemon: Pokemon) {
        this.onCatch.emit(pokemon)
    }

    navigateToForm(id: number) {
        this._router.navigate([`details/${id}/edit`])
    }
}
