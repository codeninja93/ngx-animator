import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[tada]' })
export class TadaDirective {
  @HostBinding('@tada') get tada() {
    return true;
  }
  constructor() {}
}
