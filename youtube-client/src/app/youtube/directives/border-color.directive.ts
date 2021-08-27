import { Directive, HostBinding, Input } from '@angular/core';

const DAY_IN_MILLISEC = 86400000;
const MONTH_IN_MILLISEC = DAY_IN_MILLISEC * 30;
const BASE_STYLE = '3px solid ';
@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  @Input() publishTime!: string;

  @HostBinding('style.border-bottom')
  get getBorderColor(): string {
    const difference = Date.now() - new Date(this.publishTime).getTime();
    if (difference > MONTH_IN_MILLISEC * 30) {
      return `${BASE_STYLE}red`;
    }
    if (difference > DAY_IN_MILLISEC * 7) {
      return `${BASE_STYLE}blue`;
    }
    return `${BASE_STYLE}green`;
  }
}
