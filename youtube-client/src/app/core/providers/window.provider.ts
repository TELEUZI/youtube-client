import { Provider } from '@angular/core';

export const WINDOW_PROVIDER: Provider = {
  provide: Window,
  useValue: window,
};
