import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './Components/view1/view1.component';

const routes: Routes = [{path:'',redirectTo:'schedular',pathMatch:'full'},
{path:'schedular',component:View1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
