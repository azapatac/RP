import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyServiceService } from '../../services/property-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  idProperty: number;
  loading: boolean;
  property: Property;

  constructor(private propertyService: PropertyServiceService, private route: ActivatedRoute) {
    this.idProperty = + route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.loading = true;
    this.propertyService.getById(this.idProperty).subscribe(data =>{
      this.property = data;
      this.loading = false;
    })
  }
}
