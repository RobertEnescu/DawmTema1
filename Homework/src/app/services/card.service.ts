import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: Card[] = [
    {
      title: 'Stockholm',
      imageUrl:
        'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Tokyo',
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/08/28/01/40/cyberpunk-city-7415576__480.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Vienna',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCp5sSmiwGsib1rHV_8_LgACqKO-qiQCDeSA&usqp=CAU',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'London',
      imageUrl:
        'https://apprendre-la-photo.fr/wp-content/uploads/2015/09/stockholm.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'New Delhi',
      imageUrl:
        'https://static-cse.canva.com/blob/825907/ComposeStunningImages7.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Dubai',
      imageUrl:
        'https://c4.wallpaperflare.com/wallpaper/372/912/846/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  private headerTitleSubject = new BehaviorSubject<string>('New Adventure');
  public headerTitle$ = this.headerTitleSubject.asObservable();
  constructor() {}
  getCards(): Card[] {
    return this.cards;
  }
  updateHeaderTitle(title: string): void {
    this.headerTitleSubject.next(title);
  }
  getCardsByTitle(title: string): Card[] {
    return this.cards.filter((card: Card) => {
      return card.title.toLowerCase().includes(title.toLowerCase());
    });
  }
}
