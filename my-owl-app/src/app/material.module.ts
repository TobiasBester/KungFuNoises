import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
