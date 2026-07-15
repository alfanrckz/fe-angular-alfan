import { Component, OnInit } from '@angular/core';
import { Widget_gameModule } from '@shared/widgets/widget_game/widget_game.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [Widget_gameModule],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
