import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { NewEditPropertyComponent } from './components/new-edit-property/new-edit-property.component';

const routes: Routes = 
[ 
 { path: 'edit/:id', component: NewEditPropertyComponent },
 { path: 'new', component: NewEditPropertyComponent },    
 { path: 'view/:id', component: ViewPropertyComponent },
 { path: '', component: PropertiesComponent, pathMatch: 'full' },
 { path: '**', redirectTo:'/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
