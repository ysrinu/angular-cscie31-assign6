import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComputertypeComponent} from './computertype/computertype.component';

// Some routes take data attributeto indicate whether displaying a list of items or a single item
// For example, computertype/:id is for single item by id, so kind='single'
const routes: Routes = [
  {path: 'computertype/create', component: PageNotFoundComponent},
  {path: 'computertype', component: ComputertypeComponent, data: {kind: 'list'}},
  {path: 'computertype/:id', component: ComputertypeComponent, data: {kind: 'single'}},
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
