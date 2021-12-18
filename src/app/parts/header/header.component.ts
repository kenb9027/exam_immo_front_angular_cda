import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: any = null;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): any {
    this.username = localStorage.getItem('name');
  }
}
