import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ImageComponent } from './image-container/image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageServiceService } from './image-container/image-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
