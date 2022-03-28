import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const RubberBand = trigger('rubberband', [
  transition(':enter', [
    animate(
      '1000ms',
      keyframes([
        style({ transform: 'scaleX(1)', offset: 0 }),
        style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
        style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
        style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
        style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
        style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
        style({ transform: 'scaleX(1)', offset: 1 }),
      ])
    ),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
