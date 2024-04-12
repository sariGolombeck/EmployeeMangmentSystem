// import { Injectable } from '@angular/core';
// import { AbstractControl, ValidatorFn } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalValidationService {



//   // פונקציית ולידציה כללית


//   identityValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
//     const value: string = control.value;
//     const isValid: boolean = /^\d+$/.test(value); // Check if value contains only digits

//     return !isValid && value ? { 'invalidchars': true } : (value && value.length < 9) ? { 'invalidIdentity': true } : (value && value.length > 9) ? { 'invalidextradigits': true } : null; // If contains only digits, return null (no error), else return invalidIdentity

//   };
//     nameValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
//     const value: string = control.value;
//     if (value&& value.length < 3) {
//       return { 'invalid': true }; // אם השם ריק או פחות מ-3 תווים, חזור עם הודעת שגיאה
//     }
//     const isValid: boolean = /^[^\d]+$/.test(value); // בדוק אם השם מכיל רק אותיות

//     return value&& !isValid ? { 'invalid': true }: null; // אם השם מכיל רק אותיות, אז חזור עם תוצאת תקינות, אחרת חזור עם הודעת שגיאה
//   };

// }
import { AbstractControl, ValidatorFn } from '@angular/forms';
// פונקציית ולידציה כללית
export function isValidControl(control: AbstractControl): boolean {
  return control && control.value !== null && control.value !== '';
}

// פונקציות ולידציה ספציפיות
export function identityValidator(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  const isValid: boolean = /^\d+$/.test(value); // בדוק אם ערך מכיל רק ספרות

  return !isValid && value ? { 'invalidchars': true } :
    (value && value.length < 9) ? { 'invalidIdentity': true } :
      (value && value.length > 9) ? { 'invalidextradigits': true } : null; // אם מכיל רק ספרות, החזר null (אין שגיאה), אחרת החזר invalidIdentity
}

export function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  if (value && value.length < 3) {
    return { 'invalid': true }; // אם השם ריק או פחות מ-3 תווים, החזר הודעת שגיאה
  }
  const isValid: boolean = /^[^\d]+$/.test(value); // בדוק אם השם מכיל רק אותיות

  return value && !isValid ? { 'invalid': true } : null; // אם השם מכיל רק אותיות, החזר תקינות, אחרת החזר הודעת שגיאה
}

export function dateValidator(control: AbstractControl): { [key: string]: any } | null {
  const d: Date = new Date(control.value);
  console.log("d",d)
  const currentDate: Date = new Date();
  const age = currentDate.getFullYear() - d.getFullYear();

  return d > currentDate
    ? { 'invalidDate': true }
    : age < 18
      ? { 'ageUnder18': true }
      : null;
}

export function validateEntryDate(control: AbstractControl, startOfWorkDate: Date): { [key: string]: any } | null {
  console.log("the golobal", startOfWorkDate);
  const entryDate = new Date(control.value);
  console.log(
    entryDate < startOfWorkDate
  );
  return (entryDate < startOfWorkDate) ? { 'invalidEntryDate': true }
    // return { invalidEntryDate: true, message: 'Entry date must be after start of work date' };
    : null;
}


// ... פונקציות ולידציה נוספות לפי הצורך
