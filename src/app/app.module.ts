import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { PokemonModule } from './pokemon/pokemon.module'
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, PokemonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
