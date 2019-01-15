import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Subscription} from 'rxjs';
import {Filters} from './filters.model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.sass'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':leave', [
                    style({opacity: 1}),
                    animate('500ms', style({ opacity: 0 }))
                ])
            ]
        )
    ],
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
