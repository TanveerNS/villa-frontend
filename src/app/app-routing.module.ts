import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'contact', component: ContactComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/:id', component: PropertiesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
