import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function BackOutDown({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('backOutDown', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'translateY(0) scale(0.7)',
            offset: 0.7,
          }),
          style({
            transform: 'translateY(700px) scale(0.7)',
            opacity: 0.7,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
