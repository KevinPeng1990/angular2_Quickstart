import { Component } from '@angular/core';
// import { PigsComponent } from './pig/pigs.component';
// import { PigService } from './pig/pig.service';

// here is my barrel // future I would just import './pig'
import { PigsComponent, PigService } from './pig/index';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [PigsComponent],
    providers: [PigService]
})
export class AppComponent { 
    // [ ] means property binding - Component to DOM
    // ( ) means event binding - DOM to Component


    title = 'Pig App';
    name = 'SP';
    pigColor = 'blue';


    changePig() {
        this.pigColor = this.pigColor === 'blue' ? 'pink' : 'blue';
    }
}
