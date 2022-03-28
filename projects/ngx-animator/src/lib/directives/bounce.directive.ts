import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[bounce]' })
export class BounceDirective {

    @HostBinding('@bounce') get animationBounce() {
        return true;
    }
    constructor() { }
}