# ngx-animator

This is simple animation collection to add to your angular project based on [Animate.css](https://animate.style/)

## Installation

```bash
npm install ngx-animator --save
```

## Demo

[Demo](http://pumped-pocket.surge.sh/)

## Usage

import module in your app module

```typescript
import { NgxAnimatorModule } from 'ngx-animator';

@NgModule({
  declarations: ],
  imports: [BrowserAnimationsModule, NgxAnimatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

you also need to have ```BrowserAnimationsModule``` imported before the ```NgxAnimatorModule``` module.

in your component, import animations

```typescript
import { Component } from '@angular/core';
import {
  Bounce,
  FadeInRight,
  Flash,
  HeadShake,
  Pulse,
  RubberBand,
  ShakeX,
  ShakeY,
} from 'ngx-animator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Bounce,
    Flash,
    Pulse,
    RubberBand,
    ShakeX,
    ShakeY,
    HeadShake,
    FadeInRight,
  ],
})
export class AppComponent {}

```

and use directive in HTML

```html
<div class="animation-cover">
   <app-rocket bounce></app-rocket>
   <p>Bounce</p>
</div>
```

