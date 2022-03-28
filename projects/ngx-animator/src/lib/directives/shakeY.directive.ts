import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[shakeY]' })
export class ShakeYDirective {
  @HostBinding('@shakeY') get shakeY() {
    return true;
  }
  constructor() {}
}
