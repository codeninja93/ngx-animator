import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function Flash({
  timeout = '350ms',
  delay = '0ms',
  easing = 'linear',
}: AnimationParams) {
  return trigger('flash', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 0.25 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0, offset: 0.75 }),
          style({ opacity: 1, offset: 1 }),
        ])
      ),
    ]),
  ]);
}
