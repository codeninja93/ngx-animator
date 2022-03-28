import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const Bounce = trigger('bounce', [
  transition(':enter', [
      animate('1000ms', keyframes([
        style({ transform: 'translateZ(0)', offset: 0 }),
        style({ transform: 'translateZ(0)', offset: 0.20 }),
        style({ transform: 'translate3d(0, -30px, 0) scaleY(1.1)', offset: 0.40 }),
        style({ transform: 'translate3d(0, -30px, 0) scaleY(1.1)', offset: 0.43 }),
        style({ transform: 'translateZ(0)', offset: 0.50 }),
        style({ transform: 'translate3d(0, -15px, 0) scaleY(1.05)', offset: 0.70 }),
        style({ transform: 'translateZ(0) scaleY(0.95)', offset: 0.80 }),
        style({ transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: 0.90 }),
        style({ transform: 'translateZ(0)', offset: 1 }),
    ])),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);