import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifService } from '../../services/gifservice.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('inputBuscar')
  inputBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) { }

  get gifs(): Gif[] {
    return this.gifService.listGifs;
  }

  searchTag() {
    const newTag = this.inputBuscar.nativeElement.value;
    this.gifService.addSearch(newTag);
    this.inputBuscar.nativeElement.value = '';
  }

}
