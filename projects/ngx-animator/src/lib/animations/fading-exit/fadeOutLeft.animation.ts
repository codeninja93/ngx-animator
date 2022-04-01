import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FadeOutLeft({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('fadeOutLeft', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'translate3d(-100%, 0, 0)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
