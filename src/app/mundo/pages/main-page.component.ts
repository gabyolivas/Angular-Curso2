import { Component } from "@angular/core";
import { Country } from '../interfaces/country.interface';
import { CountryService } from "../services/country.service";

@Component({
    selector: "app-mundo-main-page",
    templateUrl: "./main-page.component.html"
})

export class MainPageComponent {

    constructor( private countryService: CountryService ){

    }

    get countries(): Country[] {
        return [...this.countryService.countries];
    }

    onDeleteCountry( id: string ) {
        this.countryService.deleteCountryById( id );
    }

    onNewCountry( country: Country ) {
        this.countryService.addCountry( country );
    }

}
