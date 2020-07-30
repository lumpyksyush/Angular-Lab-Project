import { Component, OnInit, Input } from '@angular/core'
import { Pokemon } from '../pokemon-list/pokemon-list.component'
import { ActivatedRoute, Router } from '@angular/router'
import { PokemonService } from '../pokemon.service'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component'

@Component({
    selector: 'app-pokemon-edit-form',
    templateUrl: './pokemon-edit-form.component.html',
    styleUrls: ['./pokemon-edit-form.component.scss'],
})
export class PokemonEditFormComponent implements OnInit {
    @Input() pokemon: Pokemon

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _pokemonService: PokemonService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            const pokemon = this._pokemonService.getById(+params.get('id'))
            this.pokemon = {
                ...pokemon,
            }
        })
    }

    redirectToDetails() {
        this._router.navigate([`details/${this.pokemon.id}`])
    }

    saveChanges() {
        this.dialog.open(SuccessDialogComponent)
        this._pokemonService.updateInfo(this.pokemon)
        this.redirectToDetails()
    }

    confirm() {
        return confirm('Are you sure you want to exit the editing form?')
    }
}
