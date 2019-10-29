import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button.component';
import { InfoComponent } from './info.component';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [ButtonComponent, InfoComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [CommonModule, HttpClientModule, RouterModule, ButtonComponent, InfoComponent, LoaderComponent],
})
export class SharedModule {}
