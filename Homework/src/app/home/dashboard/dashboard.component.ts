import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cards: Card[] = [];
  filteredCards: Card[] = [];
  showResults: boolean = false;
  selectedCard: Card | null = null;
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCards = this.cards.filter((card) =>
      card.title.toLowerCase().includes(query)
    );
    this.showResults = this.filteredCards.length > 0;
    this.selectedCard = null;
  }
  onCardSelected(card: Card): void {
    this.cards.forEach((c) => (c.selected = c === card));
    this.selectedCard = card;
    this.showResults = false;
    document
      .querySelector('#cards-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
