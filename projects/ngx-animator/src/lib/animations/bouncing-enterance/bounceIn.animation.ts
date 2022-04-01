import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BounceIn({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounceIn', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.2,
          }),
          style({
            transform: 'scale3d(0.9, 0.9, 0.9)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.4,
          }),
          style({
            transform: 'scale3d(1.03, 1.03, 1.03)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 1,
            offset: 0.6,
          }),
          style({
            transform: 'scale3d(0.97, 0.97, 0.97)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.8,
          }),
          style({
            transform: 'scaleX(1)',
            opacity: 1,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
