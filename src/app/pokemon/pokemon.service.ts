import { Injectable } from '@angular/core'
import { Pokemon } from './pokemon-list/pokemon-list.component'

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    constructor() {}

    public pokemons: Pokemon[] = [
        {
            name: 'bulbasaur',
            id: 1,
            damage: 10,
            imgSrc: '../../../../assets/img/1.png',
            isCaught: false,
            detail:
                'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth.',
            date: 'Dec 17',
        },
        {
            name: 'ivysaur',
            id: 2,
            damage: 66,
            imgSrc: '../../../../assets/img/2.png',
            isCaught: false,
            detail:
                'Ivysaur is a quadruped Pokémon that has blue-green skin with darker patches. On top of its head are pointed ears with black insides and it has narrow red eyes. It has a short, rounded snout with a wide mouth and two pointed teeth in its upper jaw.',
            date: 'Jul 22',
        },
        {
            name: 'venusaur',
            id: 3,
            damage: 15,
            imgSrc: '../../../../assets/img/3.png',
            isCaught: false,
            detail:
                'Venusaur is a squat, quadruped Pokémon with bumpy, blue-green skin. It has small, circular red eyes, a short, blunt snout, and a wide mouth with two pointed teeth in the upper jaw and four in the lower jaw. ',

            date: 'Feb 4',
        },
        {
            name: 'charmander',
            id: 4,
            damage: 32,
            imgSrc: '../../../../assets/img/4.png',
            isCaught: false,
            detail:
                'Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. ',
            date: 'Jan 19',
        },
        {
            name: 'charmeleon',
            id: 5,
            damage: 88,
            imgSrc: '../../../../assets/img/5.png',
            isCaught: false,
            detail:
                'Charmeleon is a bipedal, reptilian Pokémon. It has dark red scales and a cream underside from the chest down. It has narrow, blue eyes and a long snout with a slightly hooked tip. ',
            date: 'Oct 27',
        },
        {
            name: 'charizard',
            id: 6,
            damage: 16,
            imgSrc: '../../../../assets/img/6.png',
            isCaught: false,
            detail:
                'Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail.',
            date: 'Feb 24',
        },
        {
            name: 'squirtle',
            id: 7,
            damage: 99,
            imgSrc: '../../../../assets/img/7.png',
            isCaught: false,
            detail:
                'Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. ',
            date: 'Mar 3',
        },
        {
            name: 'wartortle',
            id: 8,
            damage: 37,
            imgSrc: '../../../../assets/img/8.png',
            isCaught: false,
            detail:
                'Wartortle is a bipedal, indigo Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw.',
            date: 'Apr 1',
        },
        {
            name: 'blastoise',
            id: 9,
            damage: 44,
            imgSrc: '../../../../assets/img/9.png',
            isCaught: false,
            detail:
                'Blastoise is a large, bipedal turtle-like Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a cream-colored underside and a white ridge encircling its arms and separating the upper and lower halves.',
            date: 'Aug 10',
        },
        {
            name: 'caterpie',
            id: 10,
            damage: 29,
            imgSrc: '../../../../assets/img/11.png',
            isCaught: false,
            detail:
                'Caterpie is a Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail. There are yellow ring-shaped markings down the sides of its segmented body, which resemble its eyes and are meant to scare off predators.',
            date: 'Jul 12',
        },
        {
            name: 'butterfree',
            id: 11,
            damage: 67,
            imgSrc: '../../../../assets/img/12.png',
            isCaught: false,
            detail:
                'Butterfree resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. ',
            date: 'Jun 2',
        },
    ]

    getAll(): Pokemon[] {
        return this.pokemons
    }

    getById(id: number): Pokemon {
        return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id)
    }

    filterByName(name: string): Pokemon[] {
        return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name)
    }

    updateInfo(pokemon: Pokemon): void {
        this.pokemons = this.pokemons.map((data) =>
            data.id === pokemon.id ? pokemon : data
        )
    }
}
