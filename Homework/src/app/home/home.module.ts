import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    HeaderComponent,
    MenuBarComponent,
    OurServicesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
