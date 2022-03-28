import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[wobble]' })
export class WobbleDirective {
  @HostBinding('@wobble') get wobble() {
    return true;
  }
  constructor() {}
}
