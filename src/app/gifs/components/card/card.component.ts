import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gif-card',
  standalone: true,
  imports: [CommonModule,LazyImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('gif es requerido');
  }

}
