import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function Hinge({ delay = '0ms' }: AnimationParams) {
  return trigger('hinge', [
    transition(':leave', [
      animate(
        `2s ${delay}`,
        keyframes([
          style({
            animationTimingFunction: 'ease-in-out',
            transformOrigin: 'top left',
            offset: 0,
          }),
          style({
            transform: 'rotate(80deg)',
            animationTimingFunction: 'ease-in-out',
            transformOrigin: 'top left',
            offset: 0.2,
          }),
          style({
            transform: 'rotate(60deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out',
            offset: 0.4,
          }),
          style({
            transform: 'rotate(80deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out',
            offset: 0.6,
          }),
          style({
            transform: 'rotate(60deg)',
            transformOrigin: 'top left',
            animationTimingFunction: 'ease-in-out',
            offset: 0.8,
          }),
          style({
            transform: 'translate3d(0, 700px, 0)',
            transformOrigin: 'top left',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
