import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BounceOut({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounceOut', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scale3d(0.9, 0.9, 0.9)',
            offset: 0.2,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1)',
            opacity: 1,
            offset: 0.5,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1)',
            opacity: 1,
            offset: 0.55,
          }),
          style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
