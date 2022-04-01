import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateInUpLeft({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateInUpLeft', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'rotate(45deg)',
            transformOrigin: 'left bottom',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'translateZ(0)',
            transformOrigin: 'left bottom',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
