import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyListComponent } from './components/Emergencys/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/Emergencys/emergency-create/emergency-create.component';
import { EmergencyDetailsComponent } from './components/Emergencys/emergency-details/emergency-details.component';
import { EmergencyEditComponent } from './components/Emergencys/emergency-edit/emergency-edit.component';


const routes: Routes = [

  
  { path: "", redirectTo: "/EmergencyList", pathMatch: "full" },
  { path: "EmergencyList", component: EmergencyListComponent },
  { path: "EmergencyCreate/create", component:EmergencyCreateComponent },
  { path: "EmergencyDetails/details/:id", component: EmergencyDetailsComponent },
  { path: "EmergencyEdit/edit/:id", component: EmergencyEditComponent }


  /*{ path: 'list', component: EmergencyListComponent },*/
  /*{ path: '', redirectTo: "list", pathMatch: 'full' },*/
  /*{ path: '**', redirectTo: "" },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
