import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import {
  CustomConfig,
  PredefinedTexts,
} from '../../../configurator/domain/configurator.interfaces';
import { FormValueControl } from '@angular/forms/signals';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-custom-text',
  imports: [MatRadioModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './custom-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTextComponent implements FormValueControl<CustomConfig> {
  protected readonly predefinedTexts = PredefinedTexts;

  public readonly value = model.required<CustomConfig>();
  public readonly disabled = input.required<boolean>();

  public setPredefinedText(predefinedText: boolean): void {
    console.warn('predefinedText: ', predefinedText);
    this.value.update((custom) => ({
      ...custom,
      predefinedText: predefinedText,
    }));
  }

  public setCustomText(text: string): void {
    this.value.update((custom) => ({
      ...custom,
      text,
    }));
  }
}
