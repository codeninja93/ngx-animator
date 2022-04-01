import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function Flip({
  timeout = '350ms',
  delay = '0ms',
}: AnimationParams) {
  return trigger('flip', [
    transition(':enter', [
      animate(
        `${timeout} ${delay}`,
        keyframes([
          style({
            transform:
              'perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)',
            animationTimingFunction: 'ease-out',
            backfaceVisibility: 'visible',
            offset: 0,
          }),
          style({
            transform:
              'perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)',
            animationTimingFunction: 'ease-out',
            backfaceVisibility: 'visible',
            offset: 0.4,
          }),
          style({
            transform:
              'perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)',
            animationTimingFunction: 'ease-out',
            backfaceVisibility: 'visible',
            offset: 0.5,
          }),
          style({
            transform:
              'perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg)',
            animationTimingFunction: 'ease-in',
            backfaceVisibility: 'visible',
            offset: 0.8,
          }),
          style({
            transform:
              'perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)',
            animationTimingFunction: 'ease-in',
            backfaceVisibility: 'visible',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
