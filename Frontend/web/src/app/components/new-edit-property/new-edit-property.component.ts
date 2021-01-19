import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-new-edit-property',
  templateUrl: './new-edit-property.component.html',
  styleUrls: ['./new-edit-property.component.css']
})
export class NewEditPropertyComponent implements OnInit {

  action: string = "New";
  idProperty: number;
  loading: boolean;
  property: Property;
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private propertyService: PropertyService, private router: Router) { 
    
      this.propertyForm = fb.group({
        name: ['', Validators.required],
        location: ['', Validators.required],
        owner: ['', Validators.required],
        price: ['', Validators.required],
      });

      if(+this.route.snapshot.paramMap.get('id') > 0) 
      {
        this.idProperty = +this.route.snapshot.paramMap.get('id');
      } 

    }

  ngOnInit(): void {
    this.isEdit();
  }
  
  isEdit(){
    if (this.idProperty > 0)
    {      
      this.loading = true;
      this.action = "Edit";
      this.propertyService.getById(this.idProperty).subscribe(data =>{
        this.property = data;

        this.propertyForm.patchValue({          
          name: data.name,
          location: data.location,
          owner: data.owner,
          price: data.price,
        })

        this.loading = false;
      })
    }
  }

  save()
  {
    if(this.action === "New")
    {
      const property  : Property = 
      {
        name: this.propertyForm.get("name").value,
        location: this.propertyForm.get("location").value,
        owner: this.propertyForm.get("owner").value,
        price: this.propertyForm.get("price").value,
      }

      this.propertyService.post(property).subscribe(data => {
        this.router.navigate(['/']);
      });      
    }
    else
    {
      const property  : Property =       
      {
        id: this.property.id,
        name: this.propertyForm.get("name").value,
        location: this.propertyForm.get("location").value,
        owner: this.propertyForm.get("owner").value,
        price: this.propertyForm.get("price").value,
      }

      this.propertyService.put(this.idProperty, property).subscribe(data =>{
        this.router.navigate(['/']);
      });
    }
  }
}
