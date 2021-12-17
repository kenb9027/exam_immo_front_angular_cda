import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../shared/services/agent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private router: Router, private fb: FormBuilder, private agentService: AgentService) { }

  ngOnInit(): void {
  }
  submit():void{
    this.agentService.login(this.loginForm.value)
    .then( () => {
      this.router.navigate(['home']);
    })
    .catch( err => console.log(err))
  }
}
