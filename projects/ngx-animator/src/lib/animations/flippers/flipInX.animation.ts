import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function FlipInX({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('flipInX', [
    transition(':enter', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            transform: 'perspective(400px) rotateX(90deg)',
            animationTimingFunction: 'ease-in',
            backfaceVisibility: 'visible',
            opacity: 0,
            offset: 0,
          }),
          style({
            transform: 'perspective(400px) rotateX(-20deg)',
            animationTimingFunction: 'ease-in',
            backfaceVisibility: 'visible',
            offset: 0.4,
          }),
          style({
            transform: 'perspective(400px) rotateX(10deg)',
            opacity: 1,
            backfaceVisibility: 'visible',
            offset: 0.6,
          }),
          style({
            transform: 'perspective(400px) rotateX(-5deg)',
            backfaceVisibility: 'visible',
            offset: 0.8,
          }),
          style({
            transform: 'perspective(400px)',
            backfaceVisibility: 'visible',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
