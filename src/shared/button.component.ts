import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-button',
  template: `
    <button type="button" [ngClass]="classname" [disabled]="inactive">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public primary!: any;
  @Input() public secondary!: any;
  @Input() public disabled!: any;

  public classname!: string;
  public inactive!: true | null;

  public ngOnInit(): void {
    this.setClassName();
    this.inactive = this.isDisabled() ? true : null;
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

  private isDisabled() {
    return this.disabled !== undefined;
  }
}
