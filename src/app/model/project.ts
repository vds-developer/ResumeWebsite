import { ImageListItem } from './image_list_item';


export class Project implements ImageListItem {
  imageUrl: string;
  imageText: string;
  title: string;
  subTitle: string;
  buttonText: string;
  metaData: string[];
}
