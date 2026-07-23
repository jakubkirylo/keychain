import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { ColorOptions } from '../../../configurator/domain/configurator.interfaces';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent implements FormValueControl<ColorOptions> {
  public readonly shape = input.required<'heart' | 'square'>();
  public readonly value = model.required<ColorOptions>();

  protected readonly colorOptions = ColorOptions;

  protected select(value: ColorOptions): void {
    this.value.set(value);
  }
}
