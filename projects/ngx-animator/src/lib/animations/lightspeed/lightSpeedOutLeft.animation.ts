import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function LightSpeedOutLeft({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('lightSpeedOutLeft', [
    transition(':leave', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            animationTimingFunction: 'ease-in',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
            animationTimingFunction: 'ease-in',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
