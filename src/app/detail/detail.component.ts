import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../shared/models/tag';
import { PropertyService } from '../shared/services/property.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string = '';
  property: any = {};
  tagPropIds: Array<Object> = [];
  tagIds: Array<string> = [];
  tags: any = [];

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getProperty(this.id);
  }


  getProperty(id: string) {
    this.propertyService
      .getProperty(id)
      .then((property) => {
        // console.log(property.data);
        this.property = property.data;
        this.getPropertyTags(id);
      })
      .catch((err) => console.log(err));
  }

  getPropertyTags(id: string) {
    this.propertyService
      .getPropertyTags(id)
      .then((tags) => {
        // console.log(tags);
        this.tagPropIds = tags;
        this.tagPropIds.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            // console.log(`${key}: ${value}`);
            if (key === 'TagId') {
              this.tagIds.push(value);
            }
          }
        });
        // console.log(this.tagIds);

        this.tagIds.forEach((id) => {
          this.propertyService.getTag(id).then((tag) => {
            // console.log(tag.data.name);
            this.tags.push(tag.data.name);
            console.log(this.tags);
            this.property.tags = this.tags;
          });
          
        });


      })
      .catch((err) => console.log(err));
  }
}

/**
 * 
 */