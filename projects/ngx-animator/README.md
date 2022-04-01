# ngx-animator

This is simple animation collection to add to your angular project based on [Animate.css](https://animate.style/)

## Installation

```bash
npm install ngx-animator --save
```

## Demo

[Demo](http://pumped-pocket.surge.sh/)

## Usage

Make sure you have ```BrowserAnimationsModule``` added to your application module.

in your component, import animations

```typescript
import {
  Bounce,
} from 'ngx-animator';

// Register Animation
const RegisterAnimation = Bounce({ timeout: '1200ms', delay: '100ms', easing: 'ease'});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RegisterAnimation // provide animation to component
  ],
})
export class AppComponent {}

```

and use directive in HTML

```html
<div class="animation-cover">
   <app-rocket @bounce></app-rocket> <!-- Use animation in template -->
   <p>Bounce</p>
</div>
```

Animation Params Interface

```typescript
interface AnimationParams {
    timeout?: string;
    delay?: string;
    easing?: 'ease' | 'ease-in' | 'ease-out' | 'linear' | 'ease-in-out' | string
}
```
