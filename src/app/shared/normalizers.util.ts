import {FormGroup} from '@angular/forms';

export function normalizeCurrency(fg: FormGroup, controlName: string): void {
  const control = fg.get(controlName);
  if (!control || control.value == null || control.value === '') return;

  // Ensure we are working with a number
  const n = typeof control.value === 'number'
    ? control.value
    : Number(String(control.value).replace(/\./g, '').replace(',', '.'));

  if (!Number.isFinite(n)) return;

  // Force 2 decimals as a string
  const fixed = n.toFixed(2); // "150.00"

  // IMPORTANT: set as string so the mask shows decimals
  control.setValue(fixed, { emitEvent: false });
}
