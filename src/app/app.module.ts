import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatTooltipModule,
  MatCardModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardCellComponent } from './board-cell/board-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
