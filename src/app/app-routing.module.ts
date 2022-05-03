import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { ElseComponent } from './pages/else/else.component';
import { TableVolumeComponent } from './pages/tokens/table-volume/table-volume.component';
import { TableCapitalComponent } from './pages/tokens/table-capital/table-capital.component';
import { TableOperationsComponent } from './pages/tokens/table-operations/table-operations.component';
import { LoginAdminComponent } from './pages/admin-mode/login-admin.component';
import { AddChangesVolumeComponent } from './pages/admin-mode/add-token/add-changes-volume/add-changes-volume.component';
import { AddChangesOperationsComponent } from './pages/admin-mode/add-token/add-changes-operations/add-changes-operations.component';
import { AddTokenComponent } from './pages/admin-mode/add-token/add-token.component';
import { AddChangesCapitalComponent } from './pages/admin-mode/add-token/add-changes-capitalization/add-changes-capital.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: "", component: TableCapitalComponent},
  {path: "news", component: NewsComponent},
  {path: "else", component: ElseComponent},
  {path: "volume", component: TableVolumeComponent},
  {path: "operations", component: TableOperationsComponent},
  {path: "login-admin", component: LoginAdminComponent},
  {path: "add", component: AddTokenComponent, canActivate : [AuthGuard], children:[
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
