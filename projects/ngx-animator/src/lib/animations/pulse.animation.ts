import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function Pulse({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('pulse', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({ transform: 'scaleX(1)', offset: 0 }),
          style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
          style({ transform: 'scaleX(1)', offset: 1 }),
        ])
      ),
    ]),
  ]);
}
