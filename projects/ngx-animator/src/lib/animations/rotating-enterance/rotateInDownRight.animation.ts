import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateInDownRight({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateInDownRight', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'rotate(45deg)',
            transformOrigin: 'right bottom',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'translateZ(0)',
            transformOrigin: 'right bottom',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
