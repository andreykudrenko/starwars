import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from './hero.model';
import {Filters} from './filters.model';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    constructor(private httpClient: HttpClient) {
    }

    getHeroes(body: Filters) {
        const url = 'https://cors-anywhere.herokuapp.com/https://fierce-gorge-95655.herokuapp.com/api/heroes';
        return this.httpClient.post<Hero[]>(url, body);
    }

    filterHeroes(heroes: Hero[], filters: Filters): Hero[] {
        return heroes.filter((hero) => {
            const nameMatches = hero.name.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase());
            const sideMatches = (hero.side === filters.side || filters.side === 'all');
            return nameMatches && sideMatches;
        });
    }
}
