import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _searchHistory: string[] = [];
  private apiKey: string = 'iQ3Eg11z9funwOkb4lS1U4ytwOJRJLvq';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  public listGifs: Gif[] = [];
  constructor(private http: HttpClient) { 
    this.loadLocalStorage();
  }

  get listHistory() {
    return this._searchHistory;
  }

  organizeHistory(tag: string) {
    if (!this._searchHistory.includes(tag)) {
      this._searchHistory.unshift(tag);
      this._searchHistory = this._searchHistory.splice(0, 10);
      this.saveLocalStorage();
    }
  }

  async addSearch(tag: string): Promise<void> {
    if (tag.trim().length == 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<GifResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.listGifs = resp.data;
        console.log('gifs', this.listGifs);

      })
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._searchHistory));
  }
  
  private loadLocalStorage() {
    if(!localStorage.getItem('history')) return;

    this._searchHistory = JSON.parse(localStorage.getItem('history')!);
  }


  async addSearch2(tag: string): Promise<void> {
    if (tag.trim().length == 0) return;
    this.organizeHistory(tag);
    const resp = await fetch('http://api.giphy.com/v1/gifs/search?api_key=iQ3Eg11z9funwOkb4lS1U4ytwOJRJLvq&q=superman&limit=10');
    const data = await resp.json();
    console.log('data: ', data);
  }
}
