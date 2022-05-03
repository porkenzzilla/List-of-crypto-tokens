import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokensModule } from './pages/tokens/tokens.module';
import { NewsModule } from './pages/news/news.module';
import { ElseModule } from './pages/else/else.module';
import { LoginAdminModule } from './pages/admin-mode/login-admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloaderComponent } from 'src/app/shared/components/preloader/preloader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from 'src/app/core/common-services/network.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/guards/auth.service';

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
    LoginAdminModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
