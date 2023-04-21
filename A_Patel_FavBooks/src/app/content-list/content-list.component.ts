import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {
  contents: Content[];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultBook: string = 'di.png'
    contentArray: any;
    title: any;
    errTxt: boolean | undefined;


  constructor() {
    this.contents = [
      {
        id: 0,
        title: "How to win friends and Influence people",
        description: "A book of personality developement",
        creator: "Dale Craniege",
        imgURL: "https://thepoint.gm/assets/Featured-Articles/How-to-win-friends.jpg",
        type: "Autobiography",
        tags: ["Tag 1.1"]
      },
      {
        id: 1,
        title: "The love Hypothesis",
        description: "The book of love",
        creator: "Ali Hazelwood",
        imgURL: "https://i.pinimg.com/originals/52/8a/ec/528aecd18c377b59d5ea0121b37e27c4.png",
        type: "Fiction",
        tags: ["Tag 1.1"]
      },
      {
        id: 2,
        title: "One Indian Girl",
        description: "The story of an independent woman to find love.",
        creator: "Chetan Bhagat",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/220px-One_Indian_Girl.jpg",
        tags: ["Tag1.1"]
      },
      {
        id: 3,
        title: "Steev Jobs",
        description: "Life Story of Steev Jobs",
        creator: "Walter Issacon",
        imgURL:"https://kbimages1-a.akamaihd.net/caee148f-5805-45bd-9cbf-938f2373b8d8/353/569/90/False/steve-jobs-the-life-lessons-rules-for-success.jpg",
        type: "Autobiography"
      },
      {
        id: 4,
        title: "The Great Indian Love story",
        description:"Love story you will never forget",
        creator: "Ira Trivedi",
        imgURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/516lu0z4PbL.jpg",
      },
      {
        id: 5,
        title: "The story of my experiments with truth",
        description: "Life story of Mahatama Gandhi",
        creator: "Mahatama Gandhi",
        imgURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81zcPB7uMNL.jpg",
        type:"Autobiography",
      },
      {
        id: 6,
        title: "Head Over Heels",
        description: "Choose wisely when it comes to your life.",
        creator: "Hannah Oreinstation",
        type: "Fiction",
        tags: ["Tag1.1"]
      },
      
      
    ]
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }

  searchByTitle() {
    const matchingBook = this.contents.find(book => book.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

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

  addNewBook(newBook: Content) {
    this.contents.push(newBook);
    this.contents = [...this.contents];
  }

}
