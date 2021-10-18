import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';

import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const componentsRouterCoinfig: Routes = [

{path:'header',component: HeaderComponent},
{path:'footer',component: FooterComponent},


];

@NgModule({
  imports:[
    RouterModule.forChild(componentsRouterCoinfig)
  ],
  exports:[
    RouterModule
  ]
})

export class ClintRoutingModule{}
