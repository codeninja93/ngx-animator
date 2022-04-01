import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FadeOutTopLeft({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('fadeOutTopLeft', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translateZ(0)',
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'translate3d(-100%, -100%, 0)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
