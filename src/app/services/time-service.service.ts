import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor() { }

  now(): Date {
    return new Date();
  }
}
