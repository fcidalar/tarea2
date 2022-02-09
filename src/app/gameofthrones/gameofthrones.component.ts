import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../services/gameofthrones.service';

@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css'],
})
export class GameofthronesComponent implements OnInit {
  gotChars: any;

  constructor(private gameOfThronesService: GameofthronesService) {}

  ngOnInit(): void {
    this.getGotChars();
  }

  getGotChars() {
    this.gameOfThronesService.getGotCharacters().subscribe((resp) => {

      console.log(resp);
      this.gotChars = resp;
    });
  }
}
