import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RollIn({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rollIn', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(-100%, 0, 0) rotate(-120deg)',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'translateZ(0)',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
