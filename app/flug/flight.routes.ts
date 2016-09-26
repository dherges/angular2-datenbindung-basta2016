import { Routes, RouterModule } from '@angular/router';
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {FlightHistoryComponent} from "./flight-history.component/flight-history.component";
import {AuthGuard} from "../shared/auth/auth.guard";
import {FlightEditGuard} from "./flight-booking/flight-edit/flight-edit.guard";
import {FlightSearchReactiveComponent} from "./flight-booking-reactive/flight-search-reactive.component";

const ROUTE_CONFIG = [
    {
        path: 'history',
        component: FlightHistoryComponent,
        outlet: 'aux'
    },
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'flight-search-reactive',
                component: FlightSearchReactiveComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent,
                canDeactivate: [FlightEditGuard]
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            }

        ]
    }
];


export let FLIGHT_ROUTER_PROVIDERS = [
    AuthGuard,
    FlightEditGuard
];

export let FlightRouterModule = RouterModule.forChild(ROUTE_CONFIG);