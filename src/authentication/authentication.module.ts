import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [SharedModule],
})
export class AuthenticationModule {}
