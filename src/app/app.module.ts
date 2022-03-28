import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from '../http.service';
import { TokensComponent } from './tokens/tokens.component';
import { NewsComponent } from './news/news.component';
import { ElseComponent } from './else/else.component';

@NgModule({
  declarations: [
    AppComponent,
    TokensComponent,
    NewsComponent,
    ElseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
