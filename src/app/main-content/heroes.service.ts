import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from './hero.model';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    constructor(private httpClient: HttpClient) {
    }

    getHeroes(body) {
        const url = 'https://cors-anywhere.herokuapp.com/https://fierce-gorge-95655.herokuapp.com/api/heroes';
        return this.httpClient.post<Hero[]>(url, body);
    }

    filterHeroes(heroes: Hero[], filters): Hero[] {
        return heroes.filter((hero) => hero.name.includes(filters.search));
    }
}
