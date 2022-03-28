import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[flash]' })
export class FlashDirective {
  @HostBinding('@flash') get flash() {
    return true;
  }
  constructor() {}
}
