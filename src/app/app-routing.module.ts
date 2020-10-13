import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RestrictedComponent } from './pages/restricted/restricted.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'restricted',
    component: RestrictedComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
