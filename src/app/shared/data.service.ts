import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  player_status = {
    head: 100,
    left_arm: 25,
    right_arm: 100,
    left_leg: 50,
    right_leg: 100,
    state: "hurt",
    experience: 95,
  };

  constructor() {}
}
