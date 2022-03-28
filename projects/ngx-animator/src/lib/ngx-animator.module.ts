import { NgModule } from '@angular/core';
import { BounceDirective } from './directives/bounce.directive';
import { FadeInRightDirective } from './directives/fadeInRight.directive';
import { FlashDirective } from './directives/flash.directive';
import { HeadShakeDirective } from './directives/headShake.directive';
import { PulseDirective } from './directives/pulse.directive';
import { RubberBandDirective } from './directives/rubberBand.directive';
import { ShakeXDirective } from './directives/shakeX.directive';
import { ShakeYDirective } from './directives/shakeY.directive';

const declareexport = [
  BounceDirective,
  FlashDirective,
  PulseDirective,
  RubberBandDirective,
  ShakeXDirective,
  ShakeYDirective,
  HeadShakeDirective,
  FadeInRightDirective
];

@NgModule({
  imports: [],
  exports: [...declareexport],
  declarations: [...declareexport],
  providers: [],
})
export class NgxAnimatorModule {}
