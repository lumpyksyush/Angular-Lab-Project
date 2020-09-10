import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component'
import { PokemonDetailedCardComponent } from './pokemon/pokemon-detailed-card/pokemon-detailed-card.component'

const routes: Routes = [
    { path: '', component: PokemonListComponent },
    { path: 'details/:id', component: PokemonDetailedCardComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
