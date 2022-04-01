import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FlipOutX({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('flipOutX', [
    transition(':leave', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'perspective(400px)',
            backfaceVisibility: 'visible',
            offset: 0,
          }),
          style({
            transform: 'perspective(400px) rotateX(-20deg)',
            backfaceVisibility: 'visible',
            opacity: 1,
            offset: 0.3,
          }),
          style({
            transform: 'perspective(400px) rotateX(90deg)',
            backfaceVisibility: 'visible',
            opacity: 0,
            offset: 0,
          }),
        ])
      ),
    ]),
  ]);
}
