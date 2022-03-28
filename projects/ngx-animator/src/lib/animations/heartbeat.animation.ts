import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const HeartBeat = trigger('heartbeat', [
  transition(':enter', [
    animate(
      '1000ms',
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
          offset: 0.70,
        }),
        style({
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
