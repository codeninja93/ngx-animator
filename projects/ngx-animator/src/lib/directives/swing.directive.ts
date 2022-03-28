import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[swing]' })
export class SwingDirective {
  @HostBinding('@swing') get swing() {
    return true;
  }
  constructor() {}
}
