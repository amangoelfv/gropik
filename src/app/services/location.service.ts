import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  getSearchLocalities(query: string) {
    return of([
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.55557,
        "longitude": 76.9820010000001,
        "eLoc": "1U1ZPF",
        "entryLatitude": 29.5554930000001,
        "entryLongitude": 76.9822530000001,
        "placeName": "Gianpura",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 2142,
        "orderIndex": 1,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.5282120000001,
        "longitude": 76.9690670000001,
        "eLoc": "A5BZ5Z",
        "entryLatitude": 29.5282110000001,
        "entryLongitude": 76.9691450000001,
        "placeName": "Durga Colony",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 3544,
        "orderIndex": 2,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.5363530000001,
        "longitude": 76.970562,
        "eLoc": "YSIJKJ",
        "entryLatitude": 29.536483,
        "entryLongitude": 76.970487,
        "placeName": "Ram Nagar",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 4860,
        "orderIndex": 3,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.537584,
        "longitude": 76.975175,
        "eLoc": "PRPIMU",
        "entryLatitude": 29.5376820000001,
        "entryLongitude": 76.975177,
        "placeName": "Balinagar",
        "alternateName": "Bali Nagar",
        "keywords": [],
        "addressTokens": {},
        "p": 5429,
        "orderIndex": 4,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.5401190000001,
        "longitude": 76.9591160000001,
        "eLoc": "DR8OSZ",
        "entryLatitude": 29.539811,
        "entryLongitude": 76.9591140000001,
        "placeName": "Jarauli",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 6981,
        "orderIndex": 5,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.542066,
        "longitude": 76.9695340000001,
        "eLoc": "AZKQ2M",
        "entryLatitude": 29.5418980000001,
        "entryLongitude": 76.969522,
        "placeName": "Dharamveer Colony",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 7546,
        "orderIndex": 6,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.5354970000001,
        "longitude": 76.967702,
        "eLoc": "U3J7DK",
        "entryLatitude": 29.5355480000001,
        "entryLongitude": 76.9677310000001,
        "placeName": "Joharipur Mohalla",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 8229,
        "orderIndex": 7,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.520652,
        "longitude": 76.948177,
        "eLoc": "MG6P9E",
        "entryLatitude": 29.520905,
        "entryLongitude": 76.9478980000001,
        "placeName": "Sati",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 8229,
        "orderIndex": 8,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.518,
        "longitude": 76.9462760000001,
        "eLoc": "G6LVSF",
        "entryLatitude": 29.5183860000001,
        "entryLongitude": 76.946736,
        "placeName": "Shekhpur",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 8229,
        "orderIndex": 9,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      },
      {
        "type": "LOCALITY",
        "typeX": 5,
        "placeAddress": "Gharaunda, Haryana, 132114",
        "latitude": 29.5379990000001,
        "longitude": 76.9707520000001,
        "eLoc": "AH9OQW",
        "entryLatitude": 29.537995,
        "entryLongitude": 76.9707750000001,
        "placeName": "Ambedkar Nagar",
        "alternateName": "",
        "keywords": [],
        "addressTokens": {},
        "p": 8367,
        "orderIndex": 10,
        "score": 0,
        "suggester": null,
        "richInfo": {}
      }
    ]).pipe(delay(400))

  }

  getSelectedLocation() {
    this.storage.getItem('location')
  }

  setSelectedLocation(location: any) {
    this.storage.setItem('location', location)
  }
}
