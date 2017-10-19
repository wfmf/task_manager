import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BacklogItemComponent } from './backlog-item/backlog-item.component';
import { StatusPipePipe } from './status-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BacklogItemComponent,
    StatusPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
