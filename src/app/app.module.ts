import { Input, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './store/users/users.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-users.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateUserComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({users : usersReducer}, {}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
