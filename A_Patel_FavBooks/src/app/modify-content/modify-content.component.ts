import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newBook: any = {};
  @Output() addBookEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '60%'
    });
    dialogRef.afterClosed().subscribe((newBookFromDialog: { title: any; description: any; creator: any; }) => {
      if (newBookFromDialog) {
        if (newBookFromDialog.title && newBookFromDialog.description && newBookFromDialog.creator) {
          this.newBook = newBookFromDialog;
          this.addNewBook();
        } else {
          this.MessageService.add('Nothing added. requirements not fulfilled!');
        }
      }
    });
  }
  addNewBook() {
    this.addBookEvent.emit(this.newBook);
    this.newBook = {};
  }
}
