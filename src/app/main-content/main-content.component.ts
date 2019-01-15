import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Subscription} from 'rxjs';
import {Filters} from './filters.model';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {
    allHeroes = [];
    heroesFiltered = [];
    heroesLoading = Subscription.EMPTY;
    filtersInitialValue: Filters = {
        search: 'all',
        side: 'all',
    };

    constructor(private heroesService: HeroesService) {
    }

    ngOnInit() {
        this.heroesLoading = this.heroesService.getHeroes(this.filtersInitialValue).subscribe(heroesList => {
            this.allHeroes = heroesList;
            this.heroesFiltered = heroesList;
        });
    }

    filterHeroes(filterValue: Filters) {
        this.heroesFiltered = this.heroesService.filterHeroes(this.allHeroes, filterValue);
    }

}
