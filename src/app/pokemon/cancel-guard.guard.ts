import { Injectable } from '@angular/core'
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { PokemonEditFormComponent } from './pokemon-edit-form/pokemon-edit-form.component'

export interface CanComponentDeactivate {
    confirm(): boolean
}

@Injectable({
    providedIn: 'root',
})
export class CancelGuardGuard
    implements CanDeactivate<PokemonEditFormComponent> {
    canDeactivate(
        component: PokemonEditFormComponent,
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return component.confirm()
    }
}
