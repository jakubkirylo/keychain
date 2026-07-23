import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ColorOptions } from '../../../configurator/domain/configurator.interfaces';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {
  public readonly colorOption = input<ColorOptions>();
  public readonly disabled = input<boolean>();
  public readonly shape = input<'heart' | 'square'>('heart');
  public readonly valueChange = output<ColorOptions>();

  protected readonly colorOptions = ColorOptions;
  protected select(value: ColorOptions): void {
    if (value !== this.colorOption()) {
      this.valueChange.emit(value);
    }
  }
}
