import { Component } from '@angular/core';
import {Flight} from "../../../entities/flight";
import { Http, URLSearchParams } from '@angular/http';
import {FlightService} from "../../services/flight.service";

@Component({
    selector: "flight-search",
    template: require('./flight-search.component.html'),
    providers: [FlightService],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponent {

    public from: string = "Graz";
    public to: string = "Hamburg";
    
    public selectedFlight: Flight;
    public date: string = (new Date()).toISOString();

    constructor(private flightService: FlightService) {
    }

    get flights() {
        return this.flightService.flights;
    }

    get flights$() {
        return this.flightService.flights$;
    }


    delay() {
        this.flightService.deleay();
    }

    search() {

        return new Promise((resolve, reject) => {

            this.flightService
                .find(this.from, this.to);
            

        });
    }

    select(flight: Flight) {
        this.selectedFlight = flight;
    }

}