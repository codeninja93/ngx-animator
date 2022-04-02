import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function ZoomOutLeft({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('zoomOutLeft', [
    transition(':leave', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transformOrigin: 'left center',
            opacity: 1,
            offset: 0.4,
          }),
          style({
            opacity: 0,
            transform: 'cale(0.1) translate3d(-2000px, 0, 0)',
            transformOrigin: 'left center',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1);',
            offset: 0.6,
          }),
        ])
      ),
    ]),
  ]);
}
