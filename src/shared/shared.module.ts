import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button.component';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [ButtonComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [CommonModule, HttpClientModule, RouterModule, ButtonComponent, LoaderComponent],
})
export class SharedModule {}
