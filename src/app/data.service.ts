import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Wake up in the morning', 'Put on pants', 'Brush my teeth']);
  goal = this.goals.asObservable();


  constructor() { }

  changeGoal(goal) {
  	this.goals.next(goal);
  }


}
