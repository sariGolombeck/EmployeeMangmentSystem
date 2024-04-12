import { Component } from "@angular/core";
import { Position } from "../../position/models/position";
export enum Gender {
  Male = 0,
  Female = 1
}

export class Employee {
  id!: number;
  identity: string;
  firstName: string;
  lastName: string;
  startOfWorkDate: Date;
  birthDate: Date | undefined;
  gender: Gender.Male;
  // address: string | undefined;
  constructor(
    identity: string,
    firstName: string,
    lastName: string,
    startOfWorkDate: Date,
    birthdate: Date,
    gender: Gender.Male,
    // address: string | undefined
  ) {
    this.identity = identity;
    this.firstName = firstName;
    this.lastName = lastName;
    this.startOfWorkDate = startOfWorkDate;
    this.gender = gender;
  }
}
