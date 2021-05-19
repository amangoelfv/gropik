import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentsModule } from './shared/ui-components/ui-components.module';
import { FooterComponent } from './shared/standalone-components/footer/footer.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './shared/standalone-components/header/header.module';
import { BecomeSellerComponent } from './shared/standalone-components/become-seller/become-seller.component';


const firebaseConfig = {
  apiKey: "AIzaSyAQvFJSDKNnzn5DuvsxQWBYwvRj8Y6JdT0",
  authDomain: "gropik-ng.firebaseapp.com",
  projectId: "gropik-ng",
  storageBucket: "gropik-ng.appspot.com",
  messagingSenderId: "221693957716",
  appId: "1:221693957716:web:9a1057debec704f25c3fc1",
  measurementId: "G-3WJCGDFV65"
};
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentsModule,
    AngularFireAuthModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
