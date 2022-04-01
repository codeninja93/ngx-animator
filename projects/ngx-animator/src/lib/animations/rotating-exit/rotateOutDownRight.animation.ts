import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateOutDownRight({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateOutDownRight', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transformOrigin: 'right bottom',
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'rotate(-45deg)',
            transformOrigin: 'right bottom',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
