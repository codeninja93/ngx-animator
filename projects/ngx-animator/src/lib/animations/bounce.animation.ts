import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function Bounce({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('bounce', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({ transform: 'translateZ(0)', offset: 0 }),
          style({ transform: 'translateZ(0)', offset: 0.2 }),
          style({
            transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
            offset: 0.4,
          }),
          style({
            transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
            offset: 0.43,
          }),
          style({ transform: 'translateZ(0)', offset: 0.5 }),
          style({
            transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
            offset: 0.7,
          }),
          style({ transform: 'translateZ(0) scaleY(0.95)', offset: 0.8 }),
          style({
            transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
            offset: 0.9,
          }),
          style({ transform: 'translateZ(0)', offset: 1 }),
        ])
      ),
    ]),
  ]);
}
