import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core'
import { Router } from '@angular/router'
import { Pokemon } from '../pokemon-list/pokemon-list.component'

@Component({
    selector: 'app-pokemon-list-item-text',
    templateUrl: './pokemon-list-item-text.component.html',
    styleUrls: ['./pokemon-list-item-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListItemTextComponent implements OnInit {
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
