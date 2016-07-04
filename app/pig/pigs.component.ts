import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PigComponent } from './pig.component';
import { PigService } from './pig.service';


@Component({
    moduleId: module.id,
    selector: 'app-pigs',
    templateUrl: 'pigs.component.html',
    directives: [PigComponent],
    providers: [PigService]

})
export class PigsComponent implements OnInit {
    pigs: Observable<any[]>;

    constructor(private _pigService: PigService) { }

    ngOnInit() { 
        this.pigs = this._pigService.getPigs()
        .catch((err) => {
            console.log(err); // don't do this, show the user a nice message
            return Observable.of([true]); // now we eat it, but only if the message has been communicated to the user
        });
    }
}
