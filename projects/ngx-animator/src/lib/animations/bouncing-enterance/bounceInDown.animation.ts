import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BounceInDown({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounceInDown', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(0, -3000px, 0) scaleY(3)',
            opacity: 0,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0,
          }),
          style({
            transform: 'translate3d(0, 25px, 0) scaleY(0.9)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 1,
            offset: 0.6,
          }),
          style({
            transform: 'translate3d(0, -10px, 0) scaleY(0.95)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 1,
            offset: 0.75,
          }),
          style({
            transform: 'translate3d(0, 5px, 0) scaleY(0.985)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.90,
          }),
          style({
            transform: 'translateZ(0)',
            opacity: 1,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
