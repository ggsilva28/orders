import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cancel',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './modal-cancel.component.html',
  styleUrl: './modal-cancel.component.scss'
})
export class ModalCancelComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}){}
}
