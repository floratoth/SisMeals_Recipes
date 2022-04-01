export class Recipe {
  name: string = '';
  id: number = 0;
  time: number = 0;
  difficulty: 'easy' | 'medium' | 'hard' = 'medium';
  imgUrl?: string = 'src/assets/home_images/sisters.jpg';
  ingredients: Array<string> = [];
  description: string = '';
}
