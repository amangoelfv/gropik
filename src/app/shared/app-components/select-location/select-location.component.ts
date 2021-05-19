import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { commonIconUrls } from '../../../../assets/icons/CommonIconsUrl';
import { debounceTime, filter, switchMap } from "rxjs/operators";
import { LocationService } from '../../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  resultClasses = ''
  commonIconUrls = commonIconUrls;
  searchTerm: any;
  citySelected = false;
  ngOnInit(): void {
    this.cityInput.valueChanges
      .pipe(
        filter((value: any) => value?.length < 3)).subscribe((val) => {
          this.resultClasses = ''

        })
    this.cityInput.valueChanges
      .pipe(
        filter((value: any) => value?.length >= 3 && !this.citySelected),
        debounceTime(100),
        switchMap((value) => this.locationService.getSearchLocalities(value)
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
  onSelectOption(region: any) {
    this.citySelected = true;
    this.cityInput.setValue(region.placeName + ', ' + region.placeAddress);
    this.locationService.setSelectedLocation(region)
    this.resultClasses = '';
    const city = region.placeAddress.split(',')[0].toLowerCase();
    this.router.navigate(['', city])
  }
}
