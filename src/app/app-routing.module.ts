import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TokensComponent } from './tokens/tokens.component';
import { NewsComponent } from './news/news.component';
import { ElseComponent } from './else/else.component';

const routes: Routes = [
  {path: "", component: TokensComponent},
  {path: "news", component: NewsComponent},
  {path: "else", component: ElseComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
