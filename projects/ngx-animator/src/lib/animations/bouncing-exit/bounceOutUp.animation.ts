import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BounceOutUp({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounceOutUp', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(0, -10px, 0) scaleY(0.985)',
            offset: 0.2,
          }),
          style({
            transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
            opacity: 1,
            offset: 0.40,
          }),
          style({
            transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
            opacity: 1,
            offset: 0.45,
          }),
          style({
            transform: 'translate3d(0, -2000px, 0) scaleY(3)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
