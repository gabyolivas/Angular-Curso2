import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: Country[] = [{
    id: uuid(),
    name: "Mexico",
    population: 125
  },{
    id: uuid(),  
    name: "USA",
    population: 350
  },{
    id: uuid(),  
    name: "Argentina",
    population: 60
  },
  {
    id: uuid(), 
    name: "India",
    population: 1400
  },
  {
    
    id: uuid(),
    name: "Francia",
    population: 22
  }];

  addCountry( country: Country ): void {
    
    const newCountry: Country = { id: uuid(), ...country };
    this.countries.push( newCountry );
  }

  deleteCountryById( id: string ): void {
    
    const index = this.countries.findIndex( c => c.id === id );
    this.countries.splice(index, 1);
  }
}
