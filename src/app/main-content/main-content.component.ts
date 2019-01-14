import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {
    heroes = [];
    heroesLoading = Subscription.EMPTY;
    filtersForm: FormGroup;


    constructor(private heroesService: HeroesService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.filtersForm = this.formBuilder.group({search: 'Luke', side: 'all'});
        this.filtersForm.valueChanges.subscribe(filtersValue => this.filterHeroes(filtersValue));
        this.filterHeroes(this.filtersForm.value);
    }

    filterHeroes(filtersValue) {
        this.heroesLoading = this.heroesService.getHeroes(filtersValue)
            .subscribe((heroesResponse) => this.heroes = this.heroesService.filterHeroes(heroesResponse, filtersValue));
    }

}
