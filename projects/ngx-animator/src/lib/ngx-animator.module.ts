import { NgModule } from '@angular/core';
import { BounceDirective } from './directives/bounce.directive';
import { FadeInRightDirective } from './directives/fadeInRight.directive';
import { FlashDirective } from './directives/flash.directive';
import { HeadShakeDirective } from './directives/headShake.directive';
import { HeartbeatDirective } from './directives/heartbeat.directive';
import { JelloDirective } from './directives/jello.directive';
import { PulseDirective } from './directives/pulse.directive';
import { RubberBandDirective } from './directives/rubberBand.directive';
import { ShakeXDirective } from './directives/shakeX.directive';
import { ShakeYDirective } from './directives/shakeY.directive';
import { SwingDirective } from './directives/swing.directive';
import { TadaDirective } from './directives/tada.directive';
import { WobbleDirective } from './directives/wobble.directive';

const declareexport = [
  BounceDirective,
  FlashDirective,
  PulseDirective,
  RubberBandDirective,
  ShakeXDirective,
  ShakeYDirective,
  HeadShakeDirective,
  FadeInRightDirective,
  SwingDirective,
  TadaDirective,
  WobbleDirective,
  JelloDirective,
  HeartbeatDirective
];

@NgModule({
  imports: [],
  exports: [...declareexport],
  declarations: [...declareexport],
  providers: [],
})
export class NgxAnimatorModule {}
