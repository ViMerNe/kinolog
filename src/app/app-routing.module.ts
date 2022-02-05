import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfaComponent } from './infa/infa.component';
import { KinologsComponent } from './kinologs/kinologs.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'infa', component: InfaComponent
  },
  {
  path: 'kinologs', component: KinologsComponent
  },
  {
    path: 'chat', component: ChatComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
