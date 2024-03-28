import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AppModule, ServerModule, AppRoutingModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
