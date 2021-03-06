import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function ShakeX({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('shakeX', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({ transform: 'translateZ(0)', offset: 0 }),
          style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
          style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
          style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
          style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
          style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
          style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
          style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
          style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
          style({ transform: 'translateZ(0)', offset: 1 }),
        ])
      ),
    ]),
  ]);
}
