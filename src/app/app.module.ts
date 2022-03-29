import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from '../http.service';
import { TokensModule } from './tokens/tokens.module';
import { NewsModule } from './news/news.module';
import { ElseModule } from './else/else.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TokensModule,
    NewsModule,
    ElseModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
