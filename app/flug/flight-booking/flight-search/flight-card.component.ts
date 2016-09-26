import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Flight} from "../../../entities/flight";

@Component({
    selector: 'flight-card',
    template: require('./flight-card.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.next(this.item);
    }

}