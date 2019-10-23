import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-loader',
  template: `
    <span id="loader" [class.centered]="isCentered"></span>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() public center!: any;
  public isCentered!: boolean;

  public ngOnInit(): void {
    this.setIsCentered();
  }

  private setIsCentered() {
    this.isCentered = this.center !== undefined;
  }
}
