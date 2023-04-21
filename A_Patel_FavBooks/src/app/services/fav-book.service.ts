import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FavBookService {
  getBooks: any;
    addBook: any;

  constructor(private MessageService: MessageService) { }

  getBikes(): Observable<Content[]> {
    const books = contents;
    this.MessageService.add("Content array loaded!");
    return of(books);
  }

  getBookById(id: number): Observable<any> {
    const book = contents.find(content => content.id === id);

    if (book) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(book);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
