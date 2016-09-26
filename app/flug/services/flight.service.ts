import { Injectable, Inject} from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Flight} from "../../entities/flight";
import {BASE_URL_TOKEN} from "../../app.constants";

@Injectable()
export class FlightService {

    constructor(private http: Http, @Inject(BASE_URL_TOKEN) private baseUrl: string) {
    }

    flights: Flight[] = [];
    flights$ = new BehaviorSubject([]);


    find(from: string, to: string) {

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let url = this.baseUrl + "/api/flight";

        return this.http
                    .get(url, { headers, search })
                    .map(r => r.json())
                    .subscribe(flights => {
                        this.flights = flights;
                        this.flights$.next(this.flights);
                    });


    }

    deleay() {
       
       
        // Direkte Veränderung
        // var date = new Date(this.flights[0].date);
        // date.setTime(date.getDate() + 1000 * 60 * 15);
        // this.flights[0].date = date.toISOString();

        const ONE_MINUTE = 1000 * 60;

        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];  // Flight to change!
        let oldFlightDate = new Date(oldFlight.date); // Date to change 


        let newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);

        let newFlight =  {
                    id: oldFlight.id,
                    from: oldFlight.from,
                    to: oldFlight.to,
                    date: newFlightDate.toISOString()
        };
        
        let newFlights = [
                newFlight,
                ...oldFlights.slice(1, this.flights.length)
        ];

        this.flights = newFlights;

        this.flights$.next(this.flights);

    }

}