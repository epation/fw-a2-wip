import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Country } from '../view-models/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

    private countries: Array<Country> = [
        { id: 1, name: "Switzerland", epiIndex: 87.67 },
        { id: 2, name: "Luxembourg", epiIndex: 83.12 },
        { id: 3, name: "Australia", epiIndex: 82.15 },
        { id: 4, name: "Singapore", epiIndex: 27.37 },
        { id: 5, name: "Czech Republic", epiIndex: 57.54 },
        { id: 6, name: "Germany", epiIndex: 55.37 },
        { id: 7, name: "Spain", epiIndex: 34.55 },
        { id: 8, name: "Austria", epiIndex: 81.77 },
        { id: 9, name: "Sweeden", epiIndex: 86.52 },
        { id: 10, name: "Norway", epiIndex: 47.32 }
    ]

    constructor(private userService: UserService) {
    }

    createCountry(vm: Country): Observable<any> {
        let id = 0;
        this.countries.forEach(c => {if(c.id >= id) id = c.id+1});
        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

    deleteCountry(id: number): Observable<any>{
        return Observable.of({}).delay(2000)
                .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
    }

    getCountries(): Observable<any> {
        return Observable.of(this.countries);
    }

    getCountry(id: number): Observable<Country> {
        var country = this.countries.find(c => c.id == id);
        return Observable.of(country);
    }

    // updateCountry(id: number): Observable<any> {

    // }

}