import { Component } from '@angular/core';
import {
  Bounce,
  FadeInRight,
  Flash,
  HeadShake,
  HeartBeat,
  Jello,
  Pulse,
  RubberBand,
  ShakeX,
  ShakeY,
  Swing,
  Tada,
  Wobble,
} from 'projects/ngx-animator/src/public-api';

const registerBounce = Bounce({ timeout: '1000ms' });
const registerFlash = Flash({ timeout: '1000ms', delay: '100ms' });
const RegisterPulse = Pulse({ timeout: '1000ms', delay: '200ms' });
const RegisterRubberBand = RubberBand({ timeout: '1000ms', delay: '300ms' });
const RegisterShakeX = ShakeX({timeout: '1000ms', delay: '400ms'});
const RegisterShakeY = ShakeY({timeout: '1000ms', delay: '500ms'});
const registerHeadShake = HeadShake({ timeout: '1000ms', delay: '600ms' });
const RegisterSwing = Swing({timeout: '1000ms', delay: '700ms'});
const RegisterTada = Tada({timeout: '1000ms', delay: '800ms'});
const RegisterWobble = Wobble({timeout: '1000ms', delay: '900ms'});
const RegisterJello = Jello({ timeout: '1000ms', easing: 'ease', delay: '1000ms' });
const RegisterHeartBeat = HeartBeat({ timeout: '1000ms', delay: '1100ms' });
const registerFadeInRight = FadeInRight({
  timeout: '1000ms',
  delay: '1000ms',
  easing: 'linear',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    registerBounce,
    registerFlash,
    RegisterPulse,
    RegisterRubberBand,
    RegisterShakeX,
    RegisterShakeY,
    registerHeadShake,
    registerFadeInRight,
    RegisterSwing,
    RegisterTada,
    RegisterWobble,
    RegisterJello,
    RegisterHeartBeat,
  ],
})
export class AppComponent {}
