import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TokensComponent } from './pages/tokens/tokens.component';
import { NewsComponent } from './pages/news/news.component';
import { ElseComponent } from './pages/else/else.component';

const routes: Routes = [
  {path: "", component: TokensComponent},
  {path: "news", component: NewsComponent},
  {path: "else", component: ElseComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
