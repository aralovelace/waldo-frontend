import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileListComponent} from "./profile-list/profile-list.component";




const routes: Routes = [
  { path: '', children: [
      { path: '', component: ProfileListComponent },
      { path: 'page/:page', component: ProfileListComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
