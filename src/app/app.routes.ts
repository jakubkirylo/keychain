import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./configurator/pages/configurator.component').then((m) => m.ConfiguratorComponent),
  },
];
