import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./configurator/pages/configurator/configurator.component').then((m) => m.ConfiguratorComponent),
  },
];
