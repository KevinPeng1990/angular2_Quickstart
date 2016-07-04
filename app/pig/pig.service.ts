import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

const URL_PIGS = 'app/pigs.json';
@Injectable()
export class PigService {
    constructor(private _http: Http) { }

    getPigs() {
        return this._http.get(URL_PIGS)
        .map((response: Response) => response.json())
        .toPromise()
        .catch((err: any) => {
            console.log(err); // again, customize me please
            return Promise.reject(err);
        });
    }

    _handlerError(err: any){
        console.log(err); // log this somewhere and format the message well for devs
        return Observable.throw(err); // our opportunity to customize this error
    }

}
