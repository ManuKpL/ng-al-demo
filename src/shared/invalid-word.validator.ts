import { AbstractControl, ValidatorFn } from '@angular/forms';

export const invalidWord = (word: string): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value.includes(word) ? { noFoo: 'YOU CANNOT DO THAT' } : null;
  };
};
