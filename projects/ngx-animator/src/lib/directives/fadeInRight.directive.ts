import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[fadeInRight]' })
export class FadeInRightDirective {

    @HostBinding('@fadeInRight') get fadeInRight() {
        return true;
    }
    constructor() { }
}