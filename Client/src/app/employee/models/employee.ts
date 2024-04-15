export enum Gender {
  Male = 0,
  Female = 1
}

export class Employee {
  id!: number;
  identity!: string;
  firstName!: string;
  lastName!: string;
  startOfWorkDate!: Date;
  birthDate: Date | undefined;
  gender!: Gender.Male;  
}
