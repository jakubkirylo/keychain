import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KeychaingConfig } from '../../domain/configurator.interfaces';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  public readonly model = input.required<KeychaingConfig>();
}
