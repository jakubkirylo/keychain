import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KeychaingConfig } from '../../domain/configurator.interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-summary',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  public readonly model = input.required<KeychaingConfig>();
}
