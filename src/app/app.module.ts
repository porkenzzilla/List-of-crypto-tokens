import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokensModule } from './pages/tokens/tokens.module';
import { NewsModule } from './pages/news/news.module';
import { ElseModule } from './pages/else/else.module';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
