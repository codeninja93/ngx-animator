import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[headshake]' })
export class HeadShakeDirective {
  @HostBinding('@headshake') get headshake() {
    return true;
  }
  constructor() {}
}
