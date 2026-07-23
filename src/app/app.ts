import { Component, inject, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly _iconRegistry = inject(MatIconRegistry);

  protected readonly title = signal('keychain-configurator');

  public constructor() {
    this._iconRegistry.setDefaultFontSetClass('material-symbols-rounded', 'mat-ligature-font');
  }
}
