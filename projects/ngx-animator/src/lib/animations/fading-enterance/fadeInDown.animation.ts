import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FadeInDown({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('fadeInDown', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'translate3d(0, -100%, 0)',
            opacity: 0,
            offset: 0,
          }),
          style({ transform: 'translateZ(0)', opacity: 1, offset: 1 }),
        ])
      ),
    ]),
  ]);
}
