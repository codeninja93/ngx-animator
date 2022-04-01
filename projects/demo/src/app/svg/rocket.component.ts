import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rocket',
    templateUrl: './rocket.component.html',
    styles: [
        `
        :host {
            display: table;
            margin: 0 auto
        }
        `
    ]
})

export class RocketComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}