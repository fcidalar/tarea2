import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css'],
})
export class HarrypotterComponent implements OnInit {
  hpChars: any;

  constructor(private harryPotterService: HarrypotterService) {}

  ngOnInit(): void {
    this.getHpChars();
  }

  getHpChars() {
    this.harryPotterService.getHpCharacters().subscribe((resp) => {
      this.hpChars = resp;
    });
  }
}
