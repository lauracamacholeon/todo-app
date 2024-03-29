import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FooterComponent } from './footer/footer.component';
import { TodoModule } from './todos/todo.module';
import { todoReducer } from './todos/reducers/todo.reducer';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { filterReducer } from './filter/filter.reducer';
import { appReducers } from '../app.reducer';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
