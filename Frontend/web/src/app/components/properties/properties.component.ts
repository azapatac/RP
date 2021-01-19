import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { PropertyServiceService } from '../../services/property-service.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  loading: boolean;
  properties: Property[];
  
  constructor(private propertyService: PropertyServiceService) { }

  ngOnInit(): void {    
    this.loadProperties();
  }

  loadProperties(){
    this.loading = true;
    this.propertyService.get().subscribe(data => {
      this.properties = data;
      this.loading = false;
    })
  }

  delete(id: number)
  {
    this.loading = true;
    this.propertyService.delete(id).subscribe(data => 
    {
      this.loadProperties();
      this.loading = false;  
    })
  }
}
