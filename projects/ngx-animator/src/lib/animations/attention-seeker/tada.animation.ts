import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function Tada({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('tada', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scaleX(1)',
            transformOrigin: 'center',
            offset: 0,
          }),
          style({
            transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
            transformOrigin: 'center',
            offset: 0.1,
          }),
          style({
            transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
            transformOrigin: 'center',
            offset: 0.2,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
            transformOrigin: 'center',
            offset: 0.3,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
            transformOrigin: 'center',
            offset: 0.4,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
            transformOrigin: 'center',
            offset: 0.5,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
            transformOrigin: 'center',
            offset: 0.6,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
            transformOrigin: 'center',
            offset: 0.7,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
            transformOrigin: 'center',
            offset: 0.8,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
            transformOrigin: 'center',
            offset: 0.9,
          }),
          style({
            transform: ' scaleX(1)',
            transformOrigin: 'center',
            offset: 1,
          }),
        ])
      ),
    ])
  ]);
}
