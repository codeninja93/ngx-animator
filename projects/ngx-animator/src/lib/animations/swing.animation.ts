import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function Swing({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('swing', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'rotate(15deg)',
            transformOrigin: 'center top',
            offset: 0.2,
          }),
          style({
            transform: 'rotate(-10deg)',
            transformOrigin: 'center top',
            offset: 0.4,
          }),
          style({
            transform: 'rotate(5deg)',
            transformOrigin: 'center top',
            offset: 0.6,
          }),
          style({
            transform: 'rotate(-5deg)',
            transformOrigin: 'center top',
            offset: 0.8,
          }),
          style({
            transform: 'rotate(0deg)',
            transformOrigin: 'center top',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
