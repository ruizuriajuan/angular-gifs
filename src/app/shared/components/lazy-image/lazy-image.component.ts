import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public imgLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url requerida.');
  }

  onLoad() {
    console.log('image loaded');
    this.imgLoaded = true;
  }

}
