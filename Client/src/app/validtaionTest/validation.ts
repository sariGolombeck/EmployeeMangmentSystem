
import { AbstractControl, ValidatorFn } from '@angular/forms';
// פונקציית ולידציה כללית
export function isValidControl(control: AbstractControl): boolean {
  return control && control.value !== null && control.value !== '';
}

export function identityValidator(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  const isValid: boolean = /^\d+$/.test(value); // בדוק אם ערך מכיל רק ספרות

  return !isValid && value ? { 'invalidchars': true } :
    (value && value.length < 9) ? { 'invalidIdentity': true } :
      (value && value.length > 9) ? { 'invalidextradigits': true } : null; // אם מכיל רק ספרות, החזר null (אין שגיאה), אחרת החזר invalidIdentity
}

export function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  if (value && value.length < 2) {
    return { 'invalidLettersAmount': true };

  }
  const isValid: boolean = /^[^\d]+$/.test(value); // בדוק אם השם מכיל רק אותיות

  return value && !isValid ? { 'invalid': true } : null; // אם השם מכיל רק אותיות, החזר תקינות, אחרת החזר הודעת שגיאה
}

export function dateValidator(control: AbstractControl): { [key: string]: any } | null {
  const d: Date = new Date(control.value);
  console.log("d", d)
  const currentDate: Date = new Date();
  const age = currentDate.getFullYear() - d.getFullYear();

  return d > currentDate
    ? { 'invalidDate': true }
    : age < 18
      ? { 'ageUnder18': true }
      : null;
}

// export function validateEntryDate(control: AbstractControl, startOfWorkDate: Date): { [key: string]: any } | null {
//   console.log("the golobal", startOfWorkDate);
//   const entryDate = new Date(control.value);
//   console.log(
//     entryDate < startOfWorkDate
//   );
//   if(entryDate < startOfWorkDate)
//     return { 'invalidEntryDate': true }

//   return null;
// }
// export function validateEntryDate(control: AbstractControl, startOfWorkDate: Date): { [key: string]: any } | null {
//   const entryDate = new Date(control.value);
//   if (entryDate < startOfWorkDate)
//     {
//     console.log("eval", (entryDate < startOfWorkDate));
//     console.log("the golobal start firsty", startOfWorkDate,entryDate);
//     return { 'invalidEntryDate': true }
//     }
//   return null;
// }

export function validateEntryDate(control: AbstractControl, startOfWorkDate: Date): { [key: string]: any } | null {
    const entryDate = new Date(control.value);
    var currentDate: Date = new Date(startOfWorkDate);
    console.log("start", startOfWorkDate,"entry", entryDate, currentDate);
    return entryDate==null || entryDate < currentDate ? { 'invalidEntryDate': true } : null;
}
