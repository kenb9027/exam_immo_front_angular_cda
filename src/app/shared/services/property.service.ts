import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) { }

  /**
   * Get Properties
   * @returns Array of Properties
   */
  getProperties(): Promise<any>  {
     return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/properties')
        .subscribe({
          next: (properties) => resolve(properties),
          error: () => reject,
          complete: () => console.log('get DONE!')
        });
     });
  }
}
