import { inject, InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage abstraction', {
  factory: () => inject(Window).localStorage,
});
