export class Recipe {
  id?: string = '';
  name: string = '';
  time: number = 0;
  category: string = '';
  imgUrl?: string = 'src/assets/home_images/sisters.jpg';
  ingredients?: Array<{value: string}> = [{value: ""}];
  description: string = '';
}
