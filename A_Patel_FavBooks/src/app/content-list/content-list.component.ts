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
  defaultBike: string = '/assets/images/drawBike.jpg'


  constructor() {
    this.contents = [
      {
        id: 0,
        title: "How to win friends and Influence people",
        description: "A book of personality developement",
        creator: "Dale Craniege",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/Products/5016/ba433ac4-0669-47e4-a7f4-735c91bb0362.jpg?w=510&h=340&mode=crop",
        type: "Autobiography",
        tags: ["Tag 1.1"]
      },
      {
        id: 1,
        title: "The love Hypnosis",
        description: "The book of love",
        creator: "Ali Hazelwood",
        imgURL: "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2023/4dc57ed5-4a65-4963-a2d6-afd571510f59.png",
        type: "Fiction",
        tags: ["Tag 1.1"]
      },
      {
        id: 2,
        title: "One Indian Girl",
        description: "The story of an independent woman to find love.",
        creator: "Chetan Bhagta",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/ProductTrimGroup/31/cbcb96d1-4e57-4563-9ccf-0b3ce735ca38.jpg?w=750",
        tags: ["Tag1.1"]
      },
      {
        id: 3,
        title: "Steev Jobs",
        description: "Life Story of Steev Jobs",
        creator: "Walter Issacon",
        type: "Autobiography"
      },
      {
        id: 4,
        title: "The Great Indian Love story",
        description:"Love story you will never forget",
        creator: "Ira Trivedi",
        imgURL: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/07/Panigale-V4-.jpg?q=50&fit=crop&w=750&dpr=1.5",
      },
      {
        id: 5,
        title: "The story of my experiments with truth",
        description: "Life story of Mahatama Gandhi",
        creator: "Mahatama Gandhi",
        imgURL: "https://www.suzuki.ca/wp-content/uploads/DIA1.jpg",
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
