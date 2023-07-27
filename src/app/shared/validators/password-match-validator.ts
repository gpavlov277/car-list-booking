import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordValue: string,
  rePassValue: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;

    const password = group.get(passwordValue);
    const rePass = group.get(rePassValue);
    return password?.value === rePass?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
