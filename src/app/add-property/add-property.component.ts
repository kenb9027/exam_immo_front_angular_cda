import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agent } from '../shared/models/agent';
import { AgentService } from '../shared/services/agent.service';
import { PropertyService } from '../shared/services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  
  propertyForm = this.fb.group({
    title:['', Validators.required],
    price:[1, Validators.required],
    sector:['', Validators.required],
    rooms:[1, Validators.required],
    description:['', Validators.required],
    picture:[''],
    AgentId:[1, Validators.required],
    TypeId:[1, Validators.required],
  })

  agents: Array<Agent> = [];
  
  
  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private agentService: AgentService,
    private router: Router
  ) {}



  ngOnInit(): void { 
    this.getAgents();
  }
  


  submit(): void {
    this.propertyService
      .postProperty(this.propertyForm.value)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));
  }


  getAgents() {
    this.agentService
      .getAll()
      .then((agents) => {
        console.log(agents);
        this.agents = agents;
      })
      .catch((err) => console.log(err));

}


}
