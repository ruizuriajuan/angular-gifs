import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifservice.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    constructor(private  gifService : GifService){ 
    }

    get listHistorico(){
      return this.gifService.listHistory
    }

    buscarGif (tag:string){
      this.gifService.addSearch(tag);
    }

}
