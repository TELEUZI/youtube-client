import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule],
})
export class MaterialModule {}
