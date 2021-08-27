import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCard } from 'src/app/redux/actions/card.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  constructor(private store: Store) {}

  submitForm(
    event: Event,
    title: string,
    description: string,
    imageLink: string,
    videoLink: string,
  ) {
    event.preventDefault();
    this.store.dispatch(
      createCard({
        payload: {
          title,
          description,
          imageLink:
            imageLink ||
            'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDX3LgTmArIBIk6uvvz4y5p95MOcg',
          videoLink: videoLink || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          creationDate: new Date().toLocaleTimeString(),
        },
      }),
    );
  }
}
