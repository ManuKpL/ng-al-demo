import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { invalidWord, AppPage } from 'shared';
import { HousesService } from './houses.service';
import { House } from './House';

@Component({
  templateUrl: './house-edition.component.html',
  styleUrls: ['./house-edition.component.scss'],
})
export class HouseEditionComponent implements AppPage, OnInit {
  public pageTitle = 'House Edition';
  public house!: House | undefined;

  public editForm!: FormGroup;
  public name!: FormControl;
  public region!: FormControl;
  public coatOfArms!: FormControl;
  public words!: FormControl;
  public seat!: FormControl;
  public imagePath!: FormControl;

  constructor(private route: ActivatedRoute, private housesService: HousesService) {}

  public ngOnInit(): void {
    this.fetchHouse();
    this.createForm();
  }

  public onSubmit() {
    console.log('submit', this.editForm.value);
  }

  private fetchHouse(): void {
    const houseId: string = this.route.snapshot.params.houseId;
    const id = parseInt(houseId, 10);
    this.house = this.housesService.house(id);
  }

  private createForm(): void {
    const house = this.house || ({} as House);

    this.name = new FormControl(house.name, [Validators.required, invalidWord('foo')]);

    this.region = new FormControl(house.region);
    this.coatOfArms = new FormControl(house.coatOfArms);
    this.words = new FormControl(house.words);
    this.seat = new FormControl(house.seat);
    this.imagePath = new FormControl(house.imagePath, Validators.pattern(/^http.+\.(PNG|JPG|JPEG)/i));

    this.editForm = new FormGroup({
      name: this.name,
      region: this.region,
      coatOfArms: this.coatOfArms,
      words: this.words,
      seat: this.seat,
      imagePath: this.imagePath,
    });
  }
}
