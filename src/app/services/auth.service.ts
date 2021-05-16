import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ILoginResponse } from '../modules/auth/interfaces/login.interface';
import { IHttpResponse } from '../shared/interfaces/http.interface';
import { UtilsService } from './utils.service';

// const data = [{
//   city: "Fenwick",
//   latitude: 43.141649,
//   longitude: -85.04948
// }, {
//   city: "Andover",
//   latitude: 45.254715,
//   longitude: -93.28652
// }, {
//   city: "Minneapolis",
//   latitude: 45.014764,
//   longitude: -93.33965
// }, {
//   city: "Lydia",
//   latitude: 34.296064,
//   longitude: -80.11319
// }, {
//   city: "Duncan",
//   latitude: 34.888237,
//   longitude: -81.96902
// }, {
//   city: "Green Pond",
//   latitude: 32.683083,
//   longitude: -80.56074
// }, {
//   city: "Jersey",
//   latitude: 33.717989,
//   longitude: -83.801451
// }, {
//   city: "Norcross",
//   latitude: 33.909952,
//   longitude: -84.1794
// }, {
//   city: "Claxton",
//   latitude: 32.162077,
//   longitude: -81.90984
// }, {
//   city: "Carlton",
//   latitude: 33.994139,
//   longitude: -82.97819
// }, {
//   city: "Marcus Hook",
//   latitude: 39.832762,
//   longitude: -75.44063
// }, {
//   city: "Henderson",
//   latitude: 43.82212,
//   longitude: -76.2127
// }, {
//   city: "Buffalo",
//   latitude: 42.790708,
//   longitude: -78.82717
// }, {
//   city: "Pine Valley",
//   latitude: 42.218224,
//   longitude: -76.84694
// }, {
//   city: "Conneautville",
//   latitude: 41.746056,
//   longitude: -80.35888
// }, {
//   city: "Clearwater",
//   latitude: 27.883118,
//   longitude: -82.68389
// }, {
//   city: "Valentines",
//   latitude: 36.563755,
//   longitude: -77.82652
// }, {
//   city: "East Stone Gap",
//   latitude: 36.864429,
//   longitude: -82.737469
// }, {
//   city: "Pence Springs",
//   latitude: 37.675571,
//   longitude: -80.73336
// }, {
//   city: "East Winthrop",
//   latitude: 44.414056,
//   longitude: -69.751913
// }, {
//   city: "Newport",
//   latitude: 39.28341,
//   longitude: -75.15464
// }, {
//   city: "Asbury",
//   latitude: 40.661172,
//   longitude: -75.0321
// }, {
//   city: "New York",
//   latitude: 40.714231,
//   longitude: -74.011895
// }, {
//   city: "Albany",
//   latitude: 42.614852,
//   longitude: -73.970812
// }, {
//   city: "Norton",
//   latitude: 44.959647,
//   longitude: -71.81134
// }, {
//   city: "Denville",
//   latitude: 40.886149,
//   longitude: -74.48704
// }, {
//   city: "Bass Lake",
//   latitude: 37.364625,
//   longitude: -119.51261
// }, {
//   city: "Readfield",
//   latitude: 44.269991,
//   longitude: -88.775457
// }, {
//   city: "Delano",
//   latitude: 45.032489,
//   longitude: -93.79591
// }, {
//   city: "Maple Plain",
//   latitude: 45.015914,
//   longitude: -93.47188
// }, {
//   city: "Cincinnati",
//   latitude: 39.112169,
//   longitude: -84.60849
// }, {
//   city: "Cincinnati",
//   latitude: 39.242559,
//   longitude: -84.36042
// }, {
//   city: "Winthrop",
//   latitude: 44.755383,
//   longitude: -74.81213
// }, {
//   city: "Fredonia",
//   latitude: 42.425683,
//   longitude: -79.3371
// }, {
//   city: "Gay",
//   latitude: 33.121379,
//   longitude: -84.58776
// }, {
//   city: "Louvale",
//   latitude: 32.154164,
//   longitude: -84.83857
// }, {
//   city: "Titusville",
//   latitude: 28.306726,
//   longitude: -80.686159
// }, {
//   city: "Orlando",
//   latitude: 28.566338000000002,
//   longitude: -81.260818
// }, {
//   city: "Miami",
//   latitude: 25.558428,
//   longitude: -80.458168
// }, {
//   city: "Tampa",
//   latitude: 27.871964,
//   longitude: -82.438841
// }, {
//   city: "Washington",
//   latitude: 38.88494,
//   longitude: -77.018372
// }, {
//   city: "Halethorpe",
//   latitude: 39.241957,
//   longitude: -76.67712
// }, {
//   city: "Eutawville",
//   latitude: 33.399511,
//   longitude: -80.32069
// }, {
//   city: "Venus",
//   latitude: 27.052583,
//   longitude: -81.39628
// }, {
//   city: "Arcadia",
//   latitude: 27.186146,
//   longitude: -81.809939
// }, {
//   city: "Decatur",
//   latitude: 34.606216,
//   longitude: -87.088142
// }, {
//   city: "Concord",
//   latitude: 35.346285,
//   longitude: -80.541088
// }, {
//   city: "Charlotte",
//   latitude: 35.280464,
//   longitude: -80.75678
// }, {
//   city: "Henniker",
//   latitude: 43.173469,
//   longitude: -71.81722
// }, {
//   city: "Center Strafford",
//   latitude: 43.256254,
//   longitude: -71.10317
// }]

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  sampleUser = {
    name: 'Aman Goel',
    email: 'amangoel300@gmail.com',
    token: 'AUTH TOKEN'
  }
  constructor(
    private utils: UtilsService
  ) { }

  user: any;

  login(email: string, password: string): Observable<IHttpResponse<ILoginResponse>> {
    return of({
      success: true,
      reason: '',
      data: { user: this.sampleUser }
    }).pipe(delay(2000));
  }

  getDistance() {
    return [].map((item) => {
      return this.utils.calcDistanceBwCoordinates(item, item, 29.688184, 77.013784)

    }).sort((a, b) => a - b)
  }

}
