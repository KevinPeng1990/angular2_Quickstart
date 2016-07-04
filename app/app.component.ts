import { Component } from '@angular/core';
import { PigsComponent } from './pig/pigs.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [PigsComponent]
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
