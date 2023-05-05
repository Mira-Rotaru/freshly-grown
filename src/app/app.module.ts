import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { HomeComponent } from './components/home/home.component';
import { MarketComponent } from './components/market/market.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { SecondHeaderComponent } from './components/market/second-header/second-header.component';
import { CartComponent } from './components/market/cart/cart.component';
import { ProductsComponent } from './components/market/products/products.component';
import { MatCardModule} from '@angular/material/card';
import { config } from './config';
import { FirestoreModule } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SharedComponent,
    SecondHeaderComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    MatCardModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
