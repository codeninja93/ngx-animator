import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FadeOutUpBig({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('fadeOutUpBig', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            opacity: 1,
            offset: 0,
          }),
          style({
            transform: 'translate3d(0, -2000px, 0)',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
