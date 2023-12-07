import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'appartement/addproduct', component: AddProductComponent },
  { path: 'appartement/list/details/:id', component: DetailsComponent },
  { path: 'appartement/list', component: ProductComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
