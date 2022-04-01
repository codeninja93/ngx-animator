import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationParams } from '../../interface/animationParams';

export function HeartBeat({
  timeout = '350ms',
  delay = '0ms',
  easing = 'ease',
}: AnimationParams) {
  return trigger('heartbeat', [
    transition(':enter', [
      animate(
        `${timeout} ${delay} ${easing}`,
        keyframes([
          style({
            transform: 'scale(1)',
            offset: 0,
          }),
          style({
            transform: ' scale(1.3)',
            offset: 0.14,
          }),
          style({
            transform: 'scale(1)',
            offset: 0.28,
          }),
          style({
            transform: 'scale(1.3)',
            offset: 0.42,
          }),
          style({
            transform: 'scale(1)',
            offset: 0.7,
          }),
          style({
            transform: 'scale(1)',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]);
}
