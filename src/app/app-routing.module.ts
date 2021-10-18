import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const rootRouterConfig: Routes = [

  { path: '',redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin',
          loadChildren:() => import('./module/admin/admin.module')
        .then(m => m.AdminModule)},
  { path: 'client',
          loadChildren:() => import('./module/client/client.module')
          .then(m => m.ClientModule)},
]

@NgModule({
  imports:[
    RouterModule.forRoot(rootRouterConfig)
  ],
  exports:[
    RouterModule,
  ],
})
export class AppRoutingModule { }
