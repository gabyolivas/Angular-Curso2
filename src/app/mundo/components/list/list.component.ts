import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'mundo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public countryList: Country[] = [{
    name: "",
    population: 0
  }]

  @Output()
  public deleteCountry: EventEmitter<string> = new EventEmitter();

  emitDeleteCountry( index?: string ): void {
    
    if ( !index ) return;
    this.deleteCountry.emit( index );
  }
}
