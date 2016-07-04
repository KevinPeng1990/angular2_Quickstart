import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-pig', //<app-pig>
    templateUrl: 'pig.component.html'
})
export class PigComponent implements OnInit {
    @Input() pig: {id: number, name: string};

    myColor = 'gray';

    constructor() { }

    ngOnInit() { }

}
