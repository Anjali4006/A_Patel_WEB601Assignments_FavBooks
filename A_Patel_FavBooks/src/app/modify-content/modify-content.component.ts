import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newBook: any = {};
  @Output() addBookEvent = new EventEmitter<Content>();

  addNewBike() {
    this.addBookEvent.emit(this.newBook);
    this.newBook = {};
  }
}
