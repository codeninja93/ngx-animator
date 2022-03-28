import {
    animate,
    keyframes,
    style,
    transition,
    trigger,
  } from '@angular/animations';

  export const FadeInRight = trigger('fadeInRight', [
    transition(':enter', [
      animate(
        '1000ms',
        keyframes([
          style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 0 }),
          style({ transform: 'translateZ(0)', opacity: 1, offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
  ]);
