/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        Index
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        Home
      </a>
      <a [routerLink]=" ['./detail'] " routerLinkActive="active">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] " routerLinkActive="active">
        Barrel
      </a>
      <a [routerLink]=" ['./about'] " routerLinkActive="active">
        About
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  public name = 'Me';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}