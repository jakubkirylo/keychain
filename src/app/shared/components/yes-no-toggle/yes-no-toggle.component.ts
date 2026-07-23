import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-yes-no-toggle',
  templateUrl: './yes-no-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YesNoToggleComponent {
  public readonly value = input.required<boolean>();
  public readonly valueChange = output<boolean>();

  protected select(value: boolean): void {
    if (value !== this.value()) {
      this.valueChange.emit(value);
    }
  }
}
