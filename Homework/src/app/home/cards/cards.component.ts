import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() card: Card;
  cardService: CardService;

  constructor(cardService: CardService) {
    this.cardService = cardService;
  }

  onVisitNowClick(): void {
    this.cardService.updateHeaderTitle(this.card.title);
    const title = document.getElementById('header-section');
    if (title) {
      title.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
