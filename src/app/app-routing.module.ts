import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { VisitaComponent } from './components/pages/visita/visita.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'visita', component: VisitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
