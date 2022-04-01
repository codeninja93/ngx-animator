import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from './interface/animationParams';

export function RubberBand({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('rubberband', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({ transform: 'scaleX(1)', offset: 0 }),
          style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
          style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
          style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
          style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
          style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
          style({ transform: 'scaleX(1)', offset: 1 }),
        ])
      ),
    ]),
  ]);
}
