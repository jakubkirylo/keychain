export type SnapHookColor = 'black' | 'silver' | 'gold';
export type ColorOptions =
  'pink' | 'red' | 'violet' | 'blue' | 'green' | 'yellow' | 'white' | 'black';
interface SnapHookConfig {
  color: SnapHookColor;
  label: string;
  imageUrl: string;
}

interface HeartConfig {
  enabled: boolean;
  color: ColorOptions;
}

interface NameConfig {
  enabled: boolean;
  fontColor: ColorOptions;
  backgroundColor: ColorOptions;
}

export interface CustomConfig {
  enabled: boolean;
  color: ColorOptions;
  predefinedText: boolean;
  text: string;
}

export interface KeychaingConfig {
  snapHook: SnapHookColor;
  heart: HeartConfig;
  name: NameConfig;
  custom: CustomConfig;
}

export const SnapHookOptions: SnapHookConfig[] = [
  {
    color: 'black',
    label: 'Czarny',
    imageUrl: '/images/snapHook_black.png',
  },
  {
    color: 'silver',
    label: 'Srebrny',
    imageUrl: '/images/snapHook_silver.png',
  },
  {
    color: 'gold',
    label: 'Złoty',
    imageUrl: '/images/snapHook_gold.png',
  },
];

export const ColorOptions: ColorOptions[] = [
  'pink',
  'red',
  'violet',
  'blue',
  'green',
  'yellow',
  'white',
  'black',
];

export const PredefinedTexts: string[] = [
  'Kocham Cię',
  'Najlepszy przyjaciel',
  'Dla Ciebie',
  'Wszystkiego najlepszego',
  'Dziękuję',
  'Przepraszam',
  'Wesołych Świąt',
  'Szczęśliwego Nowego Roku',
  'Chyba Ty!',
];

export function createInitialConfiguratorConfig(): KeychaingConfig {
  return {
    snapHook: 'black',
    heart: {
      enabled: false,
      color: 'red',
    },
    name: {
      enabled: false,
      fontColor: 'black',
      backgroundColor: 'white',
    },
    custom: {
      enabled: false,
      color: 'black',
      predefinedText: true,
      text: '',
    },
  };
}
