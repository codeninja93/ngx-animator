import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Wobble = trigger('wobble', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({
          transform: 'translateZ(0)',
          offset: 0,
        }),
        style({
          transform: 'translate3d(-25%, 0, 0) rotate(-5deg)',
          offset: 0.15,
        }),
        style({
          transform: 'translate3d(20%, 0, 0) rotate(3deg)',
          offset: 0.30,
        }),
        style({
          transform: 'translate3d(-15%, 0, 0) rotate(-3deg)',
          offset: 0.45,
        }),
        style({
          transform: 'translate3d(10%, 0, 0) rotate(2deg)',
          offset: 0.60,
        }),
        style({
          transform: 'translate3d(-5%, 0, 0) rotate(-1deg)',
          offset: 0.75,
        }),
        style({
          transform: 'translateZ(0)',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
