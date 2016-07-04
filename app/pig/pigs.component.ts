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
    pigs: any[];

    constructor(private _pigService: PigService) { }

    ngOnInit() {
        // Rx observable version with subscribe function to a pigs array     
        this._pigService.getPigs_rxObservable()
            .subscribe(
            // it worked
            (pigs) => this.pigs = pigs,
            // error
            (err) => { console.log(err); } // don't do this, show the user a nice message.
            );

        // Straight up promise to array
        // this._pigService.getPigs().then((pigs) => this.pigs = pigs)
        // .catch((err) => {
        //     console.log(err); // don't do this, show the user a nice message.
        // });

        // pigs = Promise<any[]> version
        // this.pigs = this._pigService.getPigs()
        // .catch((err) => {
        //     console.log(err); // don't do this, show the user a nice message.
        // });

        // Rx observable version        
        // this.pigs = this._pigService.getPigs()
        // .catch((err) => {
        //     console.log(err); // don't do this, show the user a nice message
        //     return Observable.of([true]); // now we eat it, but only if the message has been communicated to the user
        // });
    }
}
