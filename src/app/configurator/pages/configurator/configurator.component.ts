import { Component, effect, signal } from '@angular/core';
import type { MatRadioChange } from '@angular/material/radio';
import { disabled, form, FormField } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  KeychaingConfig,
  SnapHookColor,
  SnapHookOptions,
  ColorOptions,
  PredefinedTexts,
  createInitialConfiguratorConfig,
} from '../../domain/configurator.interfaces';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { YesNoToggleComponent } from '../../../shared/components/yes-no-toggle/yes-no-toggle.component';
import { ColorsComponent } from '../../../shared/components/colors/colors.component';
import { FooterComponent } from '../footer/footer.component';
import { SummaryComponent } from '../summary/summary.component';
import { SnapHookComponent } from '../../../shared/components/snap-hook/snap-hook.component';
import { CustomTextComponent } from '../../../shared/components/custom-text/custom-text.component';

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
    FooterComponent,
    SummaryComponent,
    SnapHookComponent,
    CustomTextComponent,
    FormField,
  ],
})
export class ConfiguratorComponent {
  protected readonly configuratorModel = signal<KeychaingConfig>(createInitialConfiguratorConfig());
  protected readonly configuratorForm = form(this.configuratorModel, (path) => {
    disabled(path.heart.color, ({ valueOf }) => !valueOf(path.heart.enabled));
    disabled(path.name.fontColor, ({ valueOf }) => !valueOf(path.name.enabled));
    disabled(path.name.backgroundColor, ({ valueOf }) => !valueOf(path.name.enabled));
    disabled(path.custom, ({ valueOf }) => !valueOf(path.custom.enabled));
  });

  constructor() {
    effect(() => {
      console.warn('konfiguracja: ', this.configuratorModel());
    });
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();

    const config = this.configuratorForm();

    console.warn('on submit: ', config);
  }

  protected resetForm(): void {
    this.configuratorForm().reset(createInitialConfiguratorConfig());
  }
}
