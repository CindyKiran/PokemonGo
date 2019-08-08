import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SamsungComponent } from './components/samsung/samsung.component';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  { path: '', component: SamsungComponent },
  { path: 'menu', component:MenuComponent },
  { path: 'demo', component: DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
