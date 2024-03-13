import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  listCard :Gif[] = [];
}
