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
          complete: () => console.log('get all DONE!')
        });
     });
  }

/**
 * Get One Property
 * @param id id of property
 * @returns promise with one property
 */
  getProperty(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:3000/properties/${id}`)
      .subscribe({
        next: (property) => resolve(property),
        error: () => reject,
        complete: () => console.log('get one DONE!')
      });
    })
  }


  /**
   * Add a property
   */
  postProperty(data: Object): Promise<any> {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(`http://localhost:3000/properties/add`, data)
        .subscribe({
          next: (property) => resolve(property),
          error: () => reject,
          complete: () => console.log('post property DONE!')
      })
    })
  }

  /**
   * Get property tags
   */
  getPropertyTags(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:3000/tagproperty/property/${id}`)
      .subscribe({
        next: (tags) => resolve(tags),
        error: () => reject,
        complete: () => console.log('tags list DONE!')
    })
    })
  }



  /**
   * Get property avantages
   */
  getPropertyAvantages(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:3000/avantageproperty/property/${id}`)
      .subscribe({
        next: (avantages) => resolve(avantages),
        error: () => reject,
        complete: () => console.log('avantages list DONE!')
    })
    })
  }

  /**
   * Get avantage
   */
     getAvantage(id: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(`http://localhost:3000/avantages/${id}`)
        .subscribe({
          next: (avantages) => resolve(avantages),
          error: () => reject,
          complete: () => console.log('avantages list DONE!')
      })
      })
    }

}
