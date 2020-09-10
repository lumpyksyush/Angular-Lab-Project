import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component'
import { PokemonDetailedCardComponent } from './pokemon/pokemon-detailed-card/pokemon-detailed-card.component'
import { PokemonEditFormComponent } from './pokemon/pokemon-edit-form/pokemon-edit-form.component'

const routes: Routes = [
    { path: '', component: PokemonListComponent },
    { path: 'edit', component: PokemonEditFormComponent },
    { path: 'details/:id', component: PokemonDetailedCardComponent },
    { path: 'details/:id/edit', component: PokemonEditFormComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
