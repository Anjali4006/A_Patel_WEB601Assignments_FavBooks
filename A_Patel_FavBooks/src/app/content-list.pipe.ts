import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentList'
})
export class ContentListPipe implements PipeTransform {

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */

  transform(contents: Content[], type?: string): Content[] {
    if (type != '') {
      // If a type is provided, filter content based on the provider type
      return contents.filter(content => content.type === type);
    }
    else {
      // Otherwise, return all content with "no type" set 
      return contents.filter(content => !content.type)
    }
  }

}
