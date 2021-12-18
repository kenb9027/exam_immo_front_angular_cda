import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }


  login(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/agents/login', data)
      .subscribe( {
        next: (token: any) => {
          console.log(token);
          localStorage.setItem('auth',token.token)
          localStorage.setItem('name',token.name)
          localStorage.setItem('email',token.email)
          resolve(token) 
        },
        error: () => reject, 
      })
    })
  }

  add(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/agents/add', data)
      .subscribe({
        next: (agent) => resolve(agent),
        error: () => reject,
        complete: () => console.log('post agent DONE!')
    })
    })
  }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/agents')
      .subscribe({
        next: (agents) => resolve(agents),
        error: () => reject,
        complete: () => console.log('get agents DONE!')
    })
    })
  }
}
