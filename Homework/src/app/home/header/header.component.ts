import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.headerTitle$.subscribe((title) => {
      this.headerTitle = title;
    });
  }
}
