import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'

@Component({
    selector: 'app-pokemon-search',
    templateUrl: './pokemon-search.component.html',
    styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
    @Output() changed = new EventEmitter<string>()
    constructor() {}

    name = ''

    ngOnInit(): void {}

    filterByName() {
        this.changed.emit(this.name)
    }
}
