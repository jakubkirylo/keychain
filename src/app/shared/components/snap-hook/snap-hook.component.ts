import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import {
  SnapHookColor,
  SnapHookOptions,
} from '../../../configurator/domain/configurator.interfaces';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-snap-hook',
  imports: [],
  templateUrl: './snap-hook.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnapHookComponent implements FormValueControl<SnapHookColor> {
  protected readonly snapHookOptions = SnapHookOptions;

  public readonly value = model.required<SnapHookColor>();
  // checked?: undefined;
  // errors?: InputSignal<readonly ValidationError.WithOptionalFieldTree[]> | InputSignalWithTransform<readonly ValidationError.WithOptionalFieldTree[], unknown> | undefined;
  // disabled?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // disabledReasons?: InputSignal<readonly WithOptionalFieldTree<DisabledReason>[]> | InputSignalWithTransform<readonly WithOptionalFieldTree<DisabledReason>[], unknown> | undefined;
  // readonly?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // hidden?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // invalid?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // pending?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // touched?: ModelSignal<boolean> | InputSignal<boolean> | OutputRef<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // dirty?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // name?: InputSignal<string> | InputSignalWithTransform<string, unknown> | undefined;
  // required?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
  // min?: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> | undefined;
  // minLength?: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> | undefined;
  // max?: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> | undefined;
  // maxLength?: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> | undefined;
  // pattern?: InputSignal<readonly RegExp[]> | InputSignalWithTransform<readonly RegExp[], unknown> | undefined;
  // focus?(options?: FocusOptions): void {
  //   throw new Error('Method not implemented.');
  // }
}
