import { Component, OnInit } from '@angular/core';

import { AppPage } from 'shared';
import { House } from './House';
import { HousesService } from './houses.service';

@Component({
  selector: 'sw-houses-list',
  template: `
    <section>
      <sw-house-thumbnail *ngFor="let house of houses" [house]="house"></sw-house-thumbnail>
    </section>
  `,
  styleUrls: ['./houses-list.component.scss'],
})
export class HousesListComponent implements AppPage, OnInit {
  public pageTitle = 'Liste des Maisons';

  public houses: House[] = [];

  constructor(private housesService: HousesService) {}

  public ngOnInit(): void {
    this.housesService.fetchHouses().subscribe(houses => {
      this.houses = houses;
    });
  }
}
