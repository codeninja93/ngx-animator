import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Flash = trigger('flash', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 0.25 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0, offset: 0.75 }),
        style({ opacity: 1, offset: 1 }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
