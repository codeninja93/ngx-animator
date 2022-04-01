import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FadeInRightBig({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('fadeInRightBig', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(2000px, 0, 0)',
            opacity: 0,
            offset: 0,
          }),
          style({ transform: 'translateZ(0)', opacity: 1, offset: 1 }),
        ])
      ),
    ]),
  ]);
}
