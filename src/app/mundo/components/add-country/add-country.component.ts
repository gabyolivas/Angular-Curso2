import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'mundo-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})

export class AddCountryComponent {

  @Output()
  public onNewCountry: EventEmitter<Country> = new EventEmitter();
  
  public country = {
    name: "",
    population: 0
  }

  emitCountry(): void {
    console.log( this.country );

    if ( this.country.name.length === 0 ) return;

    this.onNewCountry.emit( this.country );

    this.country = { name: '', population: 0 };
  }
}
