import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BackInLeft({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('backInLeft', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translateX(-2000px) scale(0.7)',
            opacity: 0.7,
            offset: 0,
          }),
          style({
            transform: 'translateX(0) scale(0.7)',
            offset: 0.7,
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
