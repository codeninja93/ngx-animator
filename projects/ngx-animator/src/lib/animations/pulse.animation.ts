import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Pulse = trigger('pulse', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({ transform: 'scaleX(1)', offset: 0 }),
        style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
        style({ transform: 'scaleX(1)', offset: 1 }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
