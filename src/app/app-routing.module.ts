import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { ElseComponent } from './pages/else/else.component';
import { TableVolumeComponent } from './pages/tokens/table-volume/table-volume.component';
import { TableCapitalComponent } from './pages/tokens/table-capital/table-capital.component';
import { TableOperationsComponent } from './pages/tokens/table-operations/table-operations.component';

const routes: Routes = [
  {path: "", component: TableCapitalComponent},
  {path: "news", component: NewsComponent},
  {path: "else", component: ElseComponent},
  {path: "volume", component: TableVolumeComponent},
  {path: "operations", component: TableOperationsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
