import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Patel_FavBooks';
  bookId: number = 8;
  oneBookById: any = {};

  constructor(private FavBookService:  FavBookService) { }

  ngOnInit() {
    this.findBookById();
  }

  findBookById() {
    this.FavBookService.getBookById(this.bookId).subscribe((result: any) => {
      if (typeof result === "object") {
        this.oneBookById = result;
      }
    });
  }
}
