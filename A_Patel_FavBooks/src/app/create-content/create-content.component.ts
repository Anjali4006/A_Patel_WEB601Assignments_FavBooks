import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newBook: any = {};
  errMsg: string = '';
  @Output() addBookEvent = new EventEmitter<Content>();



  addNewBook() {

    const addBook = new Promise((resolve, reject) => {
      if (!this.newBook.title) {
        reject('Failed to add, Title is required');
      } else if (!this.newBook.description) {
        reject('Failed to add, Description is required');
      } else if (!this.newBook.creator) {
        reject('Failed to add, Creator is required');
      } else if (!this.newBook.id) {
        reject('Failed to add, Try again');
      } else {
        this.addBookEvent.emit(this.newBook);
        resolve(this.newBook.title);
      }
    });

    addBook.then(title => {
      this.errMsg = '';
      this.newBook = {};
      console.log(`New Book Added Successfully, Title: ${title}`);
    }).catch(err => {
      this.errMsg = err;
    });
  }
}
