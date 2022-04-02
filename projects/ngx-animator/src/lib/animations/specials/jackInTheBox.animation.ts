import {
    animate,
    keyframes,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  import { AnimationParams } from '../../interface/animationParams';

  export function JackInTheBox({timeout = '350ms', delay = '0ms', easing = 'ease' }: AnimationParams) {
    return trigger('jackInTheBox', [
      transition(':enter', [
        animate(
          `${timeout} ${delay} ${easing}`,
          keyframes([
            style({
              transform: 'scale(0.1) rotate(30deg)',
              opacity: 0,
              transformOrigin: 'center bottom',
              offset: 0,
            }),
            style({
              transform: 'rotate(-10deg)',
              offset: 0.5,
            }),
            style({
              transform: 'rotate(3deg)',
              offset: 0.7,
            }),
            style({
              transform: 'scale(1)',
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
    ]);
  }
