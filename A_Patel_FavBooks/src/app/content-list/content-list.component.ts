import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FavBookService } from '../services/fav-book.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
 /* defaultBook: string = '/assets/images/drawBike.jpg';*/


  constructor(private FavBookService: FavBookService) {

  }

  ngOnInit() {
    this.FavBookService.getBooks().subscribe((books: Content[]) => this.contents = books);
  }

  addNewBook(newBook: Content) {
    this.FavBookService.addBook(newBook).subscribe((newBookFromServer: Content) => {
      this.contents.push(newBookFromServer);
      this.contents = [...this.contents];
    });
  }



  searchByTitle() {
    const matchingBook = this.contents.find(book => book.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`.card`);

    if (matchingBook) {
      this.titleFound = true;

      cardElements.forEach(card => {
        if (parseInt(card.id) === matchingBook.id) {
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }

}
