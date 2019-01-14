import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {
    allHeroes = [];
    heroesFiltered = [];
    heroesLoading = Subscription.EMPTY;
    filtersForm: FormGroup;


    constructor(private heroesService: HeroesService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.filtersForm = this.formBuilder.group({search: 'Luke', side: 'all'});
        this.filtersForm.valueChanges.pipe(debounceTime(500)).subscribe(filtersValue => this.filterHeroes());
        this.heroesLoading = this.heroesService.getHeroes(this.filtersForm.value).subscribe( heroesList => {
            this.allHeroes = heroesList;
            this.filterHeroes();
        });
    }

    filterHeroes() {
        this.heroesFiltered = this.heroesService.filterHeroes(this.allHeroes, this.filtersForm.value);
    }

}
