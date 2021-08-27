import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/redux/state.models';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent {
  @Input() card!: CustomCard;
}
