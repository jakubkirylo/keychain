import { Component, effect, signal } from '@angular/core';
import type { MatRadioChange } from '@angular/material/radio';
import { form } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  KeychaingConfig,
  SnapHookColor,
  SnapHookOptions,
  ColorOptions,
  PredefinedTexts,
} from '../domain/configurator.interfaces';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { YesNoToggleComponent } from '../../shared/components/yes-no-toggle/yes-no-toggle.component';
import { ColorsComponent } from '../../shared/components/colors/colors/colors.component';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    YesNoToggleComponent,
    ColorsComponent,
  ],
})
export class ConfiguratorComponent {
  configuratorModel = signal<KeychaingConfig>({
    snapHook: 'black',
    heart: {
      enabled: false,
    },
    name: {
      enabled: false,
    },
    custom: {
      enabled: false,
    },
  });
  private readonly configuratorForm = form(this.configuratorModel);

  protected readonly snapHookOptions = SnapHookOptions;
  protected readonly colorOptions = ColorOptions;
  protected readonly predefinedTexts = PredefinedTexts;

  constructor() {
    effect(() => {
      console.warn('konfiguracja: ', this.configuratorModel());
    });
  }
  public selectSnapHookColor(color: SnapHookColor): void {
    this.configuratorForm.snapHook().value.set(color);
  }

  public setHeart(enabled: boolean): void {
    this.configuratorForm.heart().value.update((heart) => ({
      ...heart,
      enabled,
      color: enabled ? heart.color : undefined,
    }));
  }

  public setHeartColor(color: ColorOptions): void {
    this.configuratorForm.heart().value.update((heart) => ({
      ...heart,
      color,
    }));
  }

  public setName(enabled: boolean): void {
    this.configuratorForm.name().value.update((name) => ({
      ...name,
      enabled,
      fontColor: enabled ? name.fontColor : undefined,
      backgroundColor: enabled ? name.backgroundColor : undefined,
    }));
  }

  public setNameFontColor(color: ColorOptions): void {
    this.configuratorForm.name().value.update((name) => ({
      ...name,
      fontColor: color,
    }));
  }

  public setNameBackgroundColor(color: ColorOptions): void {
    this.configuratorForm.name().value.update((name) => ({
      ...name,
      backgroundColor: color,
    }));
  }

  public setCustom(enabled: boolean): void {
    this.configuratorForm.custom().value.update((name) => ({
      ...name,
      enabled,
      color: enabled ? name.color : undefined,
      text: enabled ? name.text : undefined,
    }));
  }

  public setCustomColor(color: ColorOptions): void {
    this.configuratorForm.custom().value.update((custom) => ({
      ...custom,
      color: color,
    }));
  }

  public setCustomText(text: string): void {
    this.configuratorForm.custom().value.update((custom) => ({
      ...custom,
      text: text,
    }));
  }

  public customTextType(event: MatRadioChange): void {
    this.configuratorForm.custom().value.update((custom) => ({
      ...custom,
      predefinedText: event.value,
    }));
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const config = this.configuratorForm();

    console.warn('on submit: ', config);
  }
}
