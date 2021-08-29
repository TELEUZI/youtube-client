import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCard } from 'src/app/redux/actions/card.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public title: string;

  public description: string;

  public imageLink: string;

  public videoLink: string;

  constructor(private store: Store) {
    this.title = '';
    this.description = '';
    this.imageLink = '';
    this.videoLink = '';
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.store.dispatch(
      createCard({
        payload: {
          title: form.value.title,
          description: form.value.description,
          imageLink:
            form.value.imageLink ||
            'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDX3LgTmArIBIk6uvvz4y5p95MOcg',
          videoLink: form.value.videoLink || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          creationDate: new Date().toUTCString(),
        },
      }),
    );
  }
}
