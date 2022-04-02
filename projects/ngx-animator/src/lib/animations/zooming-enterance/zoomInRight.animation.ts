import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function ZoomInRight({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('zoomInRight', [
    transition(':enter', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            opacity: 0,
            offset: 0,
          }),
          style({
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1);',
            offset: 0.6,
          }),
        ])
      ),
    ]),
  ]);
}