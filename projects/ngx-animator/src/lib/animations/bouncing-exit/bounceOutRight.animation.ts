import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BounceOutRight({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounceOutRight', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(-20px, 0, 0) scaleX(0.9)',
            opacity: 1,
            offset: 0.2,
          }),
          style({
            transform: 'translate3d(2000px, 0, 0) scaleX(2)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
