import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function ZoomIn({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('zoomIn', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0,
            offset: 0,
          }),
          style({
            opacity: 1,
            offset: 0.5,
          }),
        ])
      ),
    ]),
  ]);
}
