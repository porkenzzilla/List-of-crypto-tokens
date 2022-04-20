import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { ElseComponent } from './pages/else/else.component';
import { TableVolumeComponent } from './pages/tokens/table-volume/table-volume.component';
import { TableCapitalComponent } from './pages/tokens/table-capital/table-capital.component';
import { TableOperationsComponent } from './pages/tokens/table-operations/table-operations.component';
import { AdminModeComponent } from './pages/admin-mode/admin-mode.component';
import { AddChangesVolumeComponent } from './pages/admin-mode/add-token/add-changes-volume/add-changes-volume.component';
import { AddChangesOperationsComponent } from './pages/admin-mode/add-token/add-changes-operations/add-changes-operations.component';
import { AddTokenComponent } from './pages/admin-mode/add-token/add-token.component';
import { AddChangesCapitalComponent } from './pages/admin-mode/add-token/add-changes-capitalization/add-changes-capital.component';

const routes: Routes = [
  {path: "", component: TableCapitalComponent},
  {path: "news", component: NewsComponent},
  {path: "else", component: ElseComponent},
  {path: "volume", component: TableVolumeComponent},
  {path: "operations", component: TableOperationsComponent},
  {path: "admin-mode", component: AdminModeComponent},
  {path: "add", component: AddTokenComponent, children:[
      {path: "token-capitalization", component: AddChangesCapitalComponent},
      {path: "token-volume", component: AddChangesVolumeComponent},
      {path: "token-operations", component: AddChangesOperationsComponent}]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
