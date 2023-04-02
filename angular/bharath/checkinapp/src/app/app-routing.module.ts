import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'startCheckIn',
    component: StartcheckinComponent
  },
  {
    path: 'checkin/:id',
    component: CheckinComponent
  },
  {
    path: 'confirm',
    component: ConfirmcheckinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
