import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

    /**
   * Get tag
   */
     getTag(id: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(`http://localhost:3000/tags/${id}`)
        .subscribe({
          next: (tags) => resolve(tags),
          error: () => reject,
          complete: () => console.log('tags list DONE!')
      })
      })
     }
  
      /**
   * Get tags
   */
       getTags(): Promise<any> {
        return new Promise((resolve, reject) => {
          this.http.get(`http://localhost:3000/tags`)
          .subscribe({
            next: (tags) => resolve(tags),
            error: () => reject,
            complete: () => console.log('tags list DONE!')
        })
        })
      }
}
