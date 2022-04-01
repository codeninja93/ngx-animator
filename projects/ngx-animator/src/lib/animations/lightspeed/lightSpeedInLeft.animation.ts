import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';


export function LightSpeedInLeft({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('lightSpeedInLeft', [
    transition(':enter', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            transform: 'translate3d(-100%, 0, 0) skewX(30deg)',
            animationTimingFunction: 'ease-out',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'skewX(-20deg)',
            animationTimingFunction: 'ease-out',
            opacity: 1,
            offset: 0.6,
          }),
          style({
            transform: 'skewX(5deg)',
            animationTimingFunction: 'ease-out',
            offset: 0.8,
          }),
          style({
            transform: 'translateZ(0)',
            animationTimingFunction: 'ease-out',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
