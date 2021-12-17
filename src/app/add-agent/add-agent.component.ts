import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../shared/services/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css'],
})
export class AddAgentComponent implements OnInit {
  agentForm = this.fb.group({
    name: ['', Validators.required],
    age: [1],
    email: ['', Validators.required],
    password: ['', Validators.required],
    tel: [''],
    isAdmin: [false, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(): void {
    this.agentService
      .add(this.agentForm.value)
      .then(() => {
        this.router.navigate(['add-property']);
      })
      .catch((err) => {
        console.log(err);
        this.router.navigate(['']);

      });
  }
}
