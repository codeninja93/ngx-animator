import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function RotateIn({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rotateIn', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'rotate(-200deg)',
            transformOrigin: 'center',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'translateZ(0)',
            transformOrigin: 'center',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
