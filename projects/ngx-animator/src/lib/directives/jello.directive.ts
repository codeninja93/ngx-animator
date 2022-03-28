import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[jello]' })
export class JelloDirective {
  @HostBinding('@jello') get jello() {
    return true;
  }
  constructor() {}
}
