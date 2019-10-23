import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-button',
  template: `
    <button type="button" [ngClass]="classname">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public primary!: any;
  @Input() public secondary!: any;
  public classname!: string;

  public ngOnInit(): void {
    this.setClassName();
  }

  private setClassName() {
    if (this.isPrimary()) {
      this.classname = 'bg-primary';
    } else if (this.isSecondary()) {
      this.classname = 'bg-secondary';
    } else {
      this.classname = 'bg-gray';
    }
  }

  private isSecondary() {
    return this.secondary !== undefined;
  }

  private isPrimary() {
    return this.primary !== undefined;
  }
}
