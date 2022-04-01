import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function Wobble({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('wobble', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translateZ(0)',
            offset: 0,
          }),
          style({
            transform: 'translate3d(-25%, 0, 0) rotate(-5deg)',
            offset: 0.15,
          }),
          style({
            transform: 'translate3d(20%, 0, 0) rotate(3deg)',
            offset: 0.3,
          }),
          style({
            transform: 'translate3d(-15%, 0, 0) rotate(-3deg)',
            offset: 0.45,
          }),
          style({
            transform: 'translate3d(10%, 0, 0) rotate(2deg)',
            offset: 0.6,
          }),
          style({
            transform: 'translate3d(-5%, 0, 0) rotate(-1deg)',
            offset: 0.75,
          }),
          style({
            transform: 'translateZ(0)',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
