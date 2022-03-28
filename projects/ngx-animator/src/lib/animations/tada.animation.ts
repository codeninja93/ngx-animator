import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Tada = trigger('tada', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({
          transform: 'scaleX(1)',
          offset: 0,
        }),
        style({
          transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
          offset: 0.1,
        }),
        style({
          transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
          offset: 0.2,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
          offset: 0.3,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
          offset: 0.4,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
          offset: 0.5,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
          offset: 0.6,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
          offset: 0.7,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
          offset: 0.8,
        }),
        style({
          transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
          offset: 0.9,
        }),
        style({
          transform: ' scaleX(1)',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
