/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

}
*/


//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'One Indian Girl',
        description: 'A novel on a indian girl.',
        creator: 'Chetan Bhagat',
        imgURL: 'https://i.pinimg.com/originals/9b/43/45/9b434584b9ece9a15b2f11b1f1560885.png',
        type: '',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 2,
        title: 'Heads Over Heels',
        description: 'The novel about the life and love ',
        creator: 'Hannah Orenstein',
        imgURL: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982121471/head-over-heels-9781982121471_xlg.jpg',
        type: 'Fiction',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 3,
        title: 'The Life , Lessons And rules for success',
        description: 'An autobiography of The Steev Jobs',
        creator: 'Steev Jobs',
        imgURL: 'https://kbimages1-a.akamaihd.net/Images/caee148f-5805-45bd-9cbf-938f2373b8d8/320/320/10/false/null.jpg?method=scale',
        type: 'Autobiography',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 4,
        title: 'The great indian lovestory',
        description: 'A book to explore the world of love ',
        creator: 'Ira Trivedi',
        imgURL: 'http://prodimage.images-bn.com/pimages/9780143063889_p0_v1_s1200x630.jpg',
        type: '',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 5,
        title: 'The Love Hypnothesis',
        description: 'A novel on love ',
        creator: 'Ali Hazelwood',
        imgURL: 'https://i1.wp.com/theburstingbookshelf.com/wp-content/uploads/2021/08/The-Love-Hypothesis-by-Ali-Hazelwood.jpeg?resize=1366%2C2048',
        type: 'Fiction',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 6,
        title: 'How to win friends and influence people',
        description: 'A book for life lessons',
        creator: 'Dale Cranege',
        imgURL: 'https://d3fa68hw0m2vcc.cloudfront.net/f92/172976980.jpeg',
        type: 'Fiction',
        tags: ['Tag 1.1', 'Tag 1.2'],
      }
    ];
  }

  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {
    /*
    if (this.searchTerm.trim() === '')
    {
      this.searchExists = false;
      return;
    }
    */
    this.searchResults = this.contentArray.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.searchExists = this.searchResults.length > 0;
  }
 
}
