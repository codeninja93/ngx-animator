import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[heartbeat]' })
export class HeartbeatDirective {
  @HostBinding('@heartbeat') get heartbeat() {
    return true;
  }
  constructor() {}
}
