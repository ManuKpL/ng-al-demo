import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousesService } from './houses.service';
import { House } from './House';

@Component({
  template: '{{ house | json}}',
})
export class HouseEditionComponent implements OnInit {
  public house!: House | undefined;

  constructor(private route: ActivatedRoute, private housesService: HousesService) {}

  public ngOnInit(): void {
    this.fetchHouse();
  }

  private fetchHouse() {
    const houseId: string = this.route.snapshot.params.houseId;
    const id = parseInt(houseId, 10);
    this.house = this.housesService.house(id);
  }
}
