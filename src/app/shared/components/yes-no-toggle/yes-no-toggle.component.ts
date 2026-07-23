import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-yes-no-toggle',
  templateUrl: './yes-no-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YesNoToggleComponent implements FormValueControl<boolean> {
  public readonly value = model.required<boolean>();

  protected select(value: boolean): void {
    this.value.set(value);
  }
}
