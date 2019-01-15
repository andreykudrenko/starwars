import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Filters} from '../filters.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() formValue = new EventEmitter<Filters>();

    filtersForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.filtersForm = this.formBuilder.group({search: '', side: 'all'});
      this.filtersForm.valueChanges.pipe(
          debounceTime(500)
      ).subscribe(filtersValue => this.formValue.emit(filtersValue));
  }
}
