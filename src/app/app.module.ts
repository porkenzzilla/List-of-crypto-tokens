import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokensModule } from './pages/tokens/tokens.module';
import { NewsModule } from './pages/news/news.module';
import { ElseModule } from './pages/else/else.module';
import { AdminModeModule } from './pages/admin-mode/admin-mode.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloaderComponent } from 'src/app/shared/components/preloader/preloader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from 'src/app/core/common-services/network.interceptor';

@NgModule({
  declarations: [
    AppComponent, PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TokensModule,
    NewsModule,
    ElseModule,
    AdminModeModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
