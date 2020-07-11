import { Injectable } from '@angular/core'
import { Pokemon } from './pokemon-list/pokemon-list.component'

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    pokemons: Pokemon[]
    constructor() {}

    getAll() {
        return [
            {
                name: 'bulbasaur',
                id: 1,
                damage: 10,
                imgSrc: '../../../../assets/img/1.png',
                isCaught: false,
            },
            {
                name: 'ivysaur',
                id: 2,
                damage: 66,
                imgSrc: '../../../../assets/img/2.png',
                isCaught: false,
            },
            {
                name: 'venusaur',
                id: 3,
                damage: 15,
                imgSrc: '../../../../assets/img/3.png',
                isCaught: false,
            },
            {
                name: 'charmander',
                id: 4,
                damage: 32,
                imgSrc: '../../../../assets/img/4.png',
                isCaught: false,
            },
            {
                name: 'charmeleon',
                id: 5,
                damage: 88,
                imgSrc: '../../../../assets/img/5.png',
                isCaught: false,
            },
            {
                name: 'charizard',
                id: 6,
                damage: 16,
                imgSrc: '../../../../assets/img/6.png',
                isCaught: false,
            },
            {
                name: 'squirtle',
                id: 7,
                damage: 99,
                imgSrc: '../../../../assets/img/7.png',
                isCaught: false,
            },
            {
                name: 'wartortle',
                id: 8,
                damage: 37,
                imgSrc: '../../../../assets/img/8.png',
                isCaught: false,
            },
            {
                name: 'blastoise',
                id: 9,
                damage: 44,
                imgSrc: '../../../../assets/img/9.png',
                isCaught: false,
            },
            {
                name: 'caterpie',
                id: 10,
                damage: 29,
                imgSrc: '../../../../assets/img/12.png',
                isCaught: false,
            },
            {
                name: 'butterfree',
                id: 11,
                damage: 67,
                imgSrc: '../../../../assets/img/11.png',
                isCaught: false,
            },
        ]
    }

    getById(id: number): Pokemon[] {
        return this.pokemons.filter((pokemon: Pokemon) => pokemon.id === id)
    }

    filterByName(name: string): Pokemon[] {
        return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name)
    }
}
