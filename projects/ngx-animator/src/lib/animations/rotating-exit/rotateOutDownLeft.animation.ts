import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateOutDownLeft({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateOutDownLeft', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transformOrigin: 'left bottom',
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'rotate(45deg)',
            transformOrigin: 'left bottom',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
