import { Component } from '@angular/core';
import { DataService} from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  goals: any;
  constructor(private route:ActivatedRoute, private _data:DataService)
  {
    this.route.params.subscribe(res =>{
    this._data.goal.subscribe(res => this.goals=res);
    this._data.changeGoal(this.goals);
    })
  }
}
