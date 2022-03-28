import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[pulse]' })
export class PulseDirective {
  @HostBinding('@pulse') get pulse() {
    return true;
  }
  constructor() {}
}
