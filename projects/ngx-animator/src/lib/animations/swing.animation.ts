import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Swing = trigger('swing', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({
          transform: 'rotate(15deg)',
          transformOrigin: 'center top',
          offset: 0.2,
        }),
        style({
          transform: 'rotate(-10deg)',
          transformOrigin: 'center top',
          offset: 0.4,
        }),
        style({
          transform: 'rotate(5deg)',
          transformOrigin: 'center top',
          offset: 0.6,
        }),
        style({
          transform: 'rotate(-5deg)',
          transformOrigin: 'center top',
          offset: 0.8,
        }),
        style({
          transform: 'rotate(0deg)',
          transformOrigin: 'center top',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
