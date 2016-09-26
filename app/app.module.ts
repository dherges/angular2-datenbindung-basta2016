import {AppComponent} from "./app.component";

import {NgModule, OpaqueToken } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlightSearchComponent} from "./flug/flight-booking/flight-search/flight-search.component";
import {FlightService} from "./flug/services/flight.service";
import {BASE_URL_TOKEN} from "./app.constants";
import {CityPipe} from "./shared/pipes/city.pipe";
import {FlightModule} from "./flug/flight.module";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        FlightModule,
        SharedModule,
        AppRouterModule
    ],
    providers: [
        // {provide: FlightService, useClass: FlightService }
        // FlightService
        { provide: BASE_URL_TOKEN, useValue: "http://www.angular.at"}
    ],
    declarations: [
        AppComponent,
        HomeComponent
        // FlightSearchComponent,
        // CityPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}