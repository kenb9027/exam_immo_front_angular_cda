import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property';
import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];



  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  /**
   * Get Properties
   * @returns Array of Properties
   */
  getProperties() {
    this.propertyService
      .getProperties()
      .then((properties) => {
        console.log(properties.data)
        this.properties = properties.data
      })
      .catch((err) => console.log(err));
  }
}
