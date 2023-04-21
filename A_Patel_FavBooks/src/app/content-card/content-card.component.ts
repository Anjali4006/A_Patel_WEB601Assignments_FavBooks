import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() book: any;
  @Input() class: string = '';
  //defaultBike: string = '/assets/images/drawBike.jpg';

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }

}
