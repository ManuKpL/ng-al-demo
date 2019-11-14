import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { House } from './House';

@Component({
  selector: 'sw-house-thumbnail',
  templateUrl: './house-thumbnail.component.html',
  styleUrls: ['./house-thumbnail.component.scss'],
})
export class HouseThumbnailComponent {
  @Input() public house!: House;

  constructor(private router: Router) {}

  public onOpenEdit(): void {
    this.router.navigate(['houses', this.house.id, 'edit']);
  }
}
