import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[rubberband]' })
export class RubberBandDirective {
  @HostBinding('@rubberband') get rubberband() {
    return true;
  }
  constructor() {}
}
