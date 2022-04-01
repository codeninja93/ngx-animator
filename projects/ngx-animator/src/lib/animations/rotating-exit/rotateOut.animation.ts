import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateOut({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateOut', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transformOrigin: 'center',
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'rotate(200deg)',
            transformOrigin: 'center',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
