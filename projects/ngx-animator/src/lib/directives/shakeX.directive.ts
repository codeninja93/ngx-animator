import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[shakeX]' })
export class ShakeXDirective {
  @HostBinding('@shakeX') get shakeX() {
    return true;
  }
  constructor() {}
}
