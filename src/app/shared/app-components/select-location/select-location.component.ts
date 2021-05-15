import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { commonIconUrls } from 'src/assets/icons/CommonIconsUrl';
import { debounceTime, filter, switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  constructor() { }

  resultClasses = ''
  commonIconUrls = commonIconUrls;
  searchTerm: any;
  citySelected = false;
  ngOnInit(): void {
    this.cityInput.valueChanges
      .pipe(
        filter((value: any) => value?.length < 3)).subscribe((val) => {
          console.log("failes")
          this.resultClasses = ''

        })
    this.cityInput.valueChanges
      .pipe(
        filter((value: any) => value?.length >= 3 && !this.citySelected),
        debounceTime(100),
        switchMap((value) =>
          [this.recommendationsOg.filter(val => val.includes(value))]
        ))
      .subscribe((val) => {
        this.recommendations = val;
        this.resultClasses = 'showResult'

      })

  }

  cityInput = new FormControl('')
  recommendations: any[] = []
  recommendationsOg = [
    "mumbai", "delhi", "chennai", "mumbai", "delhi", "chennai", "bangalore"
  ]
  onInputFocus() {
    if (this.cityInput.value.length < 3) {
      this.onInputBlur()
    }
  }
  onInputBlur() {
    this.resultClasses = ''
  }

  onSubmit() {
    console.log(this.cityInput.value)
  }
  onSelectOption(city: any) {
    this.citySelected = true;
    this.cityInput.setValue(city);
    this.resultClasses = ''
  }
}
